const services = [
  { img: '/images/massage-chinois-illustration.png', title: 'Massage chinois à Rouen', description: 'Des pressions précises et des gestes traditionnels pour dénouer les tensions, détendre le dos et retrouver une agréable sensation de légèreté.', tag: 'Tradition' },
  { img: '/images/massage-thai-illustration.png', title: 'Massage thaï à Rouen', description: 'Un massage tonique inspiré des techniques thaïlandaises, associant pressions et étirements pour assouplir le corps et favoriser la détente.', tag: 'Évasion' },
  { img: '/images/massage-indien-illustration.png', title: 'Massage indien à l’huile chaude', description: 'Un soin enveloppant à l’huile chaude qui invite au lâcher-prise et transforme votre séance en véritable parenthèse de bien-être.', tag: 'Huile chaude' },
  { img: '/images/massage-pieds-illustration.png', title: 'Massage des pieds', description: 'Un massage ciblé des pieds et des jambes, idéal après une longue journée pour soulager la fatigue et procurer une relaxation profonde.', tag: 'Bien-être' },
  { img: '/images/massage-couple-illustration.png', title: 'Massage en couple à Rouen', description: 'Partagez un moment de relaxation à deux dans notre salon du centre-ville de Rouen, dans une atmosphère calme et chaleureuse.', tag: 'Duo' },
  { img: '/images/massage-royal-illustration.png', title: 'Massage royal', description: 'Notre expérience signature pour un moment de relaxation intense, avec une attention particulière portée à votre confort et à vos préférences.', tag: 'Signature' },
]

export default function ServicesSection() {
  return (
    <section id="soins" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-xs font-semibold tracking-widest text-primary/70 uppercase mb-3">Nos massages</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">Une parenthèse de détente<br className="hidden sm:block" /> adaptée à vos envies</h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">Notre équipe vous accueille dans un cadre intime et apaisant, au centre de Rouen.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article key={s.title} className="reveal group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="relative h-48 overflow-hidden">
                <img src={s.img} alt={`Illustration ${s.title} — Maison du Massage Rouen`} width={1536} height={1024} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 to-transparent" />
                <span className="absolute top-3 right-3 text-xs font-semibold bg-primary text-primary-foreground px-2.5 py-1 rounded-full">{s.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-serif font-semibold text-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                <a href="tel:+33785059844" className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline">Réserver ce massage →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
