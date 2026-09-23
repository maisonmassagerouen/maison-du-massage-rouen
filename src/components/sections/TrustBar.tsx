import { CalendarDays, Clock, Heart, MapPin } from 'lucide-react'

const stats = [
  { icon: CalendarDays, value: '7j/7', label: 'Ouvert tous les jours', sub: 'Selon disponibilité' },
  { icon: Clock, value: '10h–21h', label: 'Horaires', sub: 'Du lundi au dimanche' },
  { icon: MapPin, value: 'Rouen centre', label: '50 rue du Général Leclerc', sub: '76000 Rouen' },
  { icon: Heart, value: 'Solo & duo', label: 'Un moment pour vous', sub: 'Femme · Homme · Couple' },
]

export default function TrustBar() {
  return (
    <section className="bg-primary py-10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="reveal text-center flex flex-col items-center gap-2" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mb-1"><s.icon className="w-5 h-5 text-white" /></div>
              <span className="font-serif text-white text-xl sm:text-2xl font-semibold leading-none">{s.value}</span>
              <span className="text-white/90 text-sm font-medium">{s.label}</span>
              <span className="text-white/60 text-xs">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
