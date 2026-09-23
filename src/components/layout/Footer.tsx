import { Clock, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo-maison-massage-rouen.png" alt="Logo Maison du Massage Rouen" className="w-12 h-12 rounded-full object-cover" />
              <div><span className="block font-serif font-semibold text-background">Maison du Massage</span><span className="block text-[10px] tracking-widest text-background/60 uppercase">Rouen</span></div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">Détente, bien-être et évasion au cœur de Rouen. Massages pour femmes, hommes et couples.</p>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-background text-sm uppercase tracking-wider mb-4">Horaires</h3>
            <div className="flex items-center gap-2 text-sm text-background/80"><Clock className="w-4 h-4 text-accent" /><span>7 jours sur 7</span></div>
            <p className="mt-2 text-background font-semibold">10h00 – 21h00</p>
            <p className="mt-2 text-xs text-background/60">Avec ou sans rendez-vous selon disponibilité</p>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-background text-sm uppercase tracking-wider mb-4">Nous trouver</h3>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-accent shrink-0" /><span>50 rue du Général Leclerc<br />76000 Rouen</span></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /><a href="tel:+33785059844" className="hover:text-background font-medium">07 85 05 98 44</a></div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/60">
          <p>© {new Date().getFullYear()} Maison du Massage Rouen</p>
          <p>Massages bien-être · Actes non médicaux</p>
        </div>
      </div>
    </footer>
  )
}
