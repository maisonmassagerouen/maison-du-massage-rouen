import { Clock, MapPin, Sparkles } from 'lucide-react'

const faqs = [
  { question: 'Où trouver un salon de massage dans le centre de Rouen ?', answer: 'Maison du Massage Rouen vous accueille au 50 rue du Général Leclerc, 76000 Rouen, à proximité du centre historique et des commerces.' },
  { question: 'Quels massages proposez-vous à Rouen ?', answer: 'Nous proposons des massages chinois, thaï, indien à l’huile chaude, des pieds, en couple ainsi que notre massage royal.' },
  { question: 'Peut-on venir sans rendez-vous ?', answer: 'Nous vous accueillons avec ou sans rendez-vous selon les disponibilités. Pour choisir votre horaire, appelez-nous au 07 85 05 98 44.' },
]

export default function LocalSeoSection() {
  return (
    <section className="py-20 bg-background" aria-labelledby="massage-rouen-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="reveal-left">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">Massage bien-être à Rouen</span>
            <h2 id="massage-rouen-title" className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-5">Votre salon de massage au cœur de Rouen</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Envie de relâcher les tensions, de faire une pause ou de partager un instant de détente à deux ? Maison du Massage Rouen vous reçoit dans un cadre chaleureux au centre-ville.</p>
              <p>Choisissez la technique qui correspond à votre envie : massage chinois pour un travail précis, massage thaï plus tonique, massage indien à l’huile chaude, massage des pieds ou massage en couple.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 mt-7">
              <div className="rounded-xl bg-secondary p-4"><MapPin className="w-5 h-5 text-primary mb-2" /><p className="text-sm font-semibold">Rouen centre</p></div>
              <div className="rounded-xl bg-secondary p-4"><Clock className="w-5 h-5 text-primary mb-2" /><p className="text-sm font-semibold">10h–21h, 7j/7</p></div>
              <div className="rounded-xl bg-secondary p-4"><Sparkles className="w-5 h-5 text-primary mb-2" /><p className="text-sm font-semibold">Solo ou duo</p></div>
            </div>
          </div>
          <div className="space-y-3 reveal">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-5">Questions fréquentes</h3>
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer font-semibold text-foreground list-none flex items-center justify-between gap-4">{faq.question}<span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span></summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
