import { Clock, MapPin, Phone } from 'lucide-react'

const HERO_IMG = `${import.meta.env.BASE_URL}images/maison-massage-rouen-devanture.png`

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={HERO_IMG} alt="Devanture de Maison du Massage Rouen, 50 rue du Général Leclerc" width={1456} height={1032} className="w-full h-full object-cover object-center" fetchPriority="high" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/65 to-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          <div className="animate-fade-in inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6"><MapPin className="w-3 h-3" />50 rue du Général Leclerc · Rouen centre</div>
          <h1 className="animate-fade-in-up stagger-1 font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-4">Maison du Massage<br /><em className="italic text-accent">Rouen</em></h1>
          <p className="animate-fade-in-up stagger-2 text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">Détente, bien-être et évasion au cœur de Rouen. Découvrez nos massages chinois, thaï, indien, des pieds, en couple et notre massage royal.</p>
          <div className="animate-fade-in-up stagger-3 flex flex-col sm:flex-row gap-3">
            <a href="tel:+33785059844" className="pulse-phone flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"><Phone className="w-4 h-4" />Appeler — 07 85 05 98 44</a>
            <a href="#tarifs" className="flex items-center justify-center gap-2.5 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/25 transition-all">Voir nos tarifs</a>
          </div>
          <div className="animate-fade-in-up stagger-4 flex items-center gap-2 mt-6 text-white/85 text-sm"><Clock className="w-4 h-4" />Ouvert 7j/7 · 10h–21h</div>
        </div>
      </div>
    </section>
  )
}
