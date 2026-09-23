import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Soins', href: '#soins' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'Avis', href: '#avis' },
    { label: 'Accès', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group" aria-label="Maison du Massage Rouen — retour en haut">
          <img src="/images/logo-maison-massage-rouen.png" alt="" className="w-9 h-9 rounded-full object-cover" />
          <div className="leading-tight">
            <span className="block font-serif font-semibold text-foreground text-sm leading-none">Maison du Massage</span>
            <span className="block text-[10px] tracking-widest text-muted-foreground uppercase">Rouen centre</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+33785059844"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-full hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5" />
            07 85 05 98 44
          </a>
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            aria-controls="navigation-mobile"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="navigation-mobile" className="md:hidden bg-background/97 backdrop-blur-md border-b border-border px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-sm font-medium text-foreground/70 border-b border-border/40 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+33785059844"
            className="mt-3 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-3 rounded-xl"
          >
            <Phone className="w-4 h-4" />
            Appeler maintenant — 07 85 05 98 44
          </a>
        </div>
      )}
    </nav>
  )
}
