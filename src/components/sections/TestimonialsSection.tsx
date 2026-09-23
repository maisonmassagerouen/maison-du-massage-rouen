import { ExternalLink, Quote, Star, Target } from 'lucide-react'

const GOOGLE_PAGE = 'https://g.page/r/CUIxtqZFc5MmEBM/'

const illustrativeReviews = [
  { name: 'Camille R.', service: 'Massage chinois', text: 'Une vraie parenthèse de détente en plein centre de Rouen. Accueil chaleureux et massage très relaxant.' },
  { name: 'Sophie L.', service: 'Massage en couple', text: 'Un moment à deux très agréable, dans une ambiance calme et soignée. Nous reviendrons avec plaisir.' },
  { name: 'Nicolas B.', service: 'Massage thaï', text: 'Massage tonique et précis, idéal pour relâcher les tensions après une semaine chargée.' },
]

export default function TestimonialsSection() {
  return (
    <section id="avis" className="py-20 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start">
          <div className="reveal text-center lg:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-accent uppercase mb-3"><Target className="w-4 h-4" />Notre objectif</span>
            <div className="flex items-end justify-center lg:justify-start gap-2 mb-2"><span className="font-serif text-7xl font-semibold text-accent">4,6</span><span className="text-background/60 mb-2">/ 5</span></div>
            <div className="flex justify-center lg:justify-start gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}</div>
            <p className="text-background/75 text-sm leading-relaxed mb-5">La note que nous visons à court terme grâce à la qualité de votre accueil et de chaque massage.</p>
            <p className="text-background/50 text-xs mb-6">Note Google actuelle constatée : 4,2/5 sur 5 avis.</p>
            <a href={GOOGLE_PAGE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-accent text-accent font-semibold px-5 py-3 rounded-xl hover:bg-accent hover:text-accent-foreground transition-all">Voir les avis Google <ExternalLink className="w-4 h-4" /></a>
          </div>

          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-7 reveal">Vos retours nourrissent notre exigence</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <article className="reveal rounded-2xl border border-accent/30 bg-white/5 p-5">
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}</div>
                <Quote className="w-5 h-5 text-accent/50 mb-2" />
                <p className="text-background/90 italic mb-4">« Accueil et massage de qualité »</p>
                <p className="text-sm font-semibold">Yannick D.</p>
                <p className="text-xs text-background/50">Avis Google réel · décembre 2024</p>
              </article>
              {illustrativeReviews.map((review, i) => (
                <article key={review.name} className="reveal rounded-2xl border border-white/10 bg-white/5 p-5" style={{ transitionDelay: `${(i + 1) * 60}ms` }}>
                  <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}</div>
                  <p className="text-background/85 text-sm leading-relaxed italic mb-4">« {review.text} »</p>
                  <div className="flex items-end justify-between gap-2"><div><p className="text-sm font-semibold">{review.name}</p><p className="text-xs text-background/50">{review.service}</p></div><span className="text-[10px] uppercase tracking-wider text-accent/70">Avis d’illustration</span></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
