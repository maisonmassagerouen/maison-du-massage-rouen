import { Phone } from 'lucide-react'

const prices = [
  { name: 'Massage chinois', halfHour: '40 €', hour: '60 €' },
  { name: 'Massage thaï', halfHour: '50 €', hour: '70 €' },
  { name: 'Massage indien à l’huile chaude', halfHour: '50 €', hour: '70 €' },
  { name: 'Massage des pieds', halfHour: '50 €', hour: '70 €' },
  { name: 'Massage en couple', halfHour: '80 €', hour: '120 €' },
  { name: 'Massage royal', halfHour: '100 €', hour: '150 €' },
]

export default function PricingSection() {
  return (
    <section id="tarifs" className="py-20 bg-secondary/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 reveal">
          <span className="inline-block text-xs font-semibold tracking-widest text-primary/70 uppercase mb-3">Tarifs</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">Choisissez votre moment de détente</h2>
          <p className="text-muted-foreground">Deux durées au choix. Contactez-nous pour réserver ou obtenir un conseil.</p>
        </div>
        <div className="reveal bg-card rounded-2xl border border-border overflow-hidden shadow-md">
          <div className="grid grid-cols-[1fr_90px_90px] sm:grid-cols-[1fr_130px_130px] bg-primary text-white px-4 sm:px-6 py-4 text-sm font-semibold">
            <span>Massage</span><span className="text-center">30 min</span><span className="text-center">1 h</span>
          </div>
          <div className="divide-y divide-border">
            {prices.map((p) => (
              <div key={p.name} className="grid grid-cols-[1fr_90px_90px] sm:grid-cols-[1fr_130px_130px] items-center px-4 sm:px-6 py-4 hover:bg-secondary/40 transition-colors">
                <span className="text-foreground text-sm font-medium pr-2">{p.name}</span>
                <span className="font-serif font-semibold text-primary text-center">{p.halfHour}</span>
                <span className="font-serif font-semibold text-primary text-center">{p.hour}</span>
              </div>
            ))}
          </div>
          <div className="px-5 py-5 bg-secondary/60 text-center">
            <a href="tel:+33785059844" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-xl hover:bg-primary/90 transition-all text-sm"><Phone className="w-4 h-4" />Appeler pour réserver — 07 85 05 98 44</a>
          </div>
        </div>
      </div>
    </section>
  )
}
