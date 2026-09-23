import { Clock, ExternalLink, MapPin, Phone } from 'lucide-react'

const GOOGLE_PAGE = 'https://share.google/pI81jubG8axJsHqCf'
const GOOGLE_MAP_EMBED = 'https://www.google.com/maps?q=Maison%20du%20Massage%20ROUEN%2076000%2C%2050%20Rue%20du%20G%C3%A9n%C3%A9ral%20Leclerc%2C%2076000%20Rouen&output=embed'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 items-stretch">
          <div className="lg:col-span-2 reveal-left">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary/70 uppercase mb-3">Nous trouver</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">Votre pause bien-être au centre de Rouen</h2>
            <div className="space-y-4">
              <a href="tel:+33785059844" className="flex items-center gap-4 p-4 bg-secondary rounded-xl border border-border hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"><Phone className="w-5 h-5 text-white" /></div>
                <div><p className="text-xs text-muted-foreground uppercase tracking-wide">Téléphone</p><p className="font-semibold text-primary group-hover:underline">07 85 05 98 44</p></div>
              </a>
              <a href={GOOGLE_PAGE} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 bg-secondary rounded-xl border border-border hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-primary" /></div>
                <div><p className="text-xs text-muted-foreground uppercase tracking-wide">Adresse</p><p className="font-semibold text-foreground text-sm">50 rue du Général Leclerc</p><p className="text-muted-foreground text-sm">76000 Rouen</p><p className="text-primary text-xs mt-1 flex items-center gap-1">Itinéraire Google <ExternalLink className="w-3 h-3" /></p></div>
              </a>
              <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"><Clock className="w-5 h-5 text-primary" /></div>
                <div><p className="text-xs text-muted-foreground uppercase tracking-wide">Horaires</p><p className="font-semibold text-foreground text-sm">Lundi – dimanche</p><p className="text-muted-foreground text-sm">10h00 – 21h00</p></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 reveal min-h-[420px] rounded-2xl overflow-hidden border border-border shadow-md">
            <iframe title="Maison du Massage Rouen — 50 rue du Général Leclerc" src={GOOGLE_MAP_EMBED} width="100%" height="100%" style={{ border: 0, minHeight: '420px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </section>
  )
}
