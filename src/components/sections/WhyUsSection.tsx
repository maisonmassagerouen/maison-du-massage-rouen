import { Sparkles, Users, Clock, MapPin, Heart, Shield } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Masseuses expérimentées',
    description: 'Notre équipe est formée aux techniques traditionnelles asiatiques et vous offre un soin adapté à vos besoins.',
  },
  {
    icon: Clock,
    title: 'Avec ou sans rendez-vous',
    description: 'Ouvert tous les jours de 10h à 21h, avec ou sans rendez-vous selon nos disponibilités.',
  },
  {
    icon: MapPin,
    title: 'Idéalement situé',
    description: 'Au cœur de Rouen, au 50 rue du Général Leclerc, à proximité des commerces et transports du centre-ville.',
  },
  {
    icon: Sparkles,
    title: 'Cadre serein & propre',
    description: 'Un espace dédié au bien-être, chaleureux et soigné, où vous pouvez vous ressourcer en toute sérénité.',
  },
  {
    icon: Heart,
    title: 'Soins personnalisés',
    description: 'Chaque séance est adaptée à vos tensions, préférences et besoins du moment. Votre confort est notre priorité.',
  },
  {
    icon: Shield,
    title: 'Confidentialité & respect',
    description: 'Nous veillons à votre intimité et votre bien-être tout au long de la séance, dans un climat de confiance total.',
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-xs font-semibold tracking-widest text-primary/70 uppercase mb-3">
            Pourquoi nous choisir
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Votre bien-être, notre engagement
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Nous vous accueillons avec attention pour une parenthèse de détente adaptée à vos envies, seul(e) ou en couple.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="reveal p-6 rounded-2xl border border-border bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-foreground text-lg mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 reveal">
          <div className="relative overflow-hidden bg-primary rounded-2xl px-8 py-10 text-center">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/5" />

            <span className="relative inline-block text-xs font-semibold tracking-widest text-white/60 uppercase mb-3">
              Prendre soin de soi
            </span>
            <h3 className="relative font-serif text-white text-2xl sm:text-3xl font-semibold mb-2">
              Offrez-vous un moment de bien-être
            </h3>
            <p className="relative text-white/75 text-sm mb-6 max-w-md mx-auto">
              Réservez dès maintenant et bénéficiez d'un accueil personnalisé dans notre institut.
            </p>
            <a
              href="tel:+33785059844"
              className="relative inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.13 6.13l1.27-.84a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.5v1.42z" />
              </svg>
              07 85 05 98 44 — Appeler maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
