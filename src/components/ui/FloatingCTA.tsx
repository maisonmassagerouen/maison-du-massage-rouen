import { useState, useEffect } from 'react'
import { Phone, X } from 'lucide-react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !dismissed) {
        setVisible(true)
      } else if (window.scrollY <= 300) {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  if (!visible || dismissed) return null

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-2 md:hidden">
      {/* Dismiss */}
      <button
        onClick={() => { setDismissed(true); setVisible(false) }}
        className="w-6 h-6 bg-foreground/60 rounded-full flex items-center justify-center text-white hover:bg-foreground/80 transition-colors"
        aria-label="Fermer le bouton d'appel flottant"
      >
        <X className="w-3 h-3" />
      </button>

      {/* CTA button */}
      <a
        href="tel:+33785059844"
        className="pulse-phone flex items-center gap-2.5 bg-primary text-primary-foreground font-semibold px-4 py-3 rounded-full shadow-xl hover:bg-primary/90 transition-all active:scale-95"
      >
        <Phone className="w-5 h-5" />
        <span className="text-sm">Appeler · 07 85 05 98 44</span>
      </a>
    </div>
  )
}
