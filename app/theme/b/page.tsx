import ReviewsStrip from '@/components/ReviewsStrip'
import LeadForm from '@/components/LeadForm'

export default function Page() {
  return (
    <section className="relative border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-medium text-sky-700">Mockup B · Story + Trust</span>
            <h2 className="mt-4 text-4xl/tight font-extrabold">Neighbourhood mechanics. <span className="text-sky-700">Dealer‑level</span> diagnostics.</h2>
            <p className="mt-4 text-gray-600">From routine maintenance to complex repairs, we keep you safely on the road with modern tools and a friendly face.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {['Same‑Day Appointments','Transparent Estimates','Warranty‑Safe Service','Shuttle/Lounge'].map((t)=> (
                <div key={t} className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="font-semibold">{t}</p>
                  <p className="text-gray-600">Details that build trust</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[5/4] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white shadow-xl ring-1 ring-black/5">
              <div className="h-full w-full p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-300">Live availability</p>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                    {["Mon","Tue","Wed","Thu","Fri"].map((d,i)=> (
                      <div key={i} className="rounded-lg bg-white/10 px-3 py-2 text-center">{d}</div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-white text-gray-900 p-4">
                  <p className="text-sm font-semibold">Next available today at 2:30 PM</p>
                  <p className="text-xs text-gray-600">Submit your plate & concern, we’ll text back a quote.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ReviewsStrip />
        <div className="mt-14 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold">Request a quick quote</h3>
            <p className="mt-2 text-gray-600">Tell us what’s happening, we’ll reply with options.</p>
          </div>
          <LeadForm accent="sky" />
        </div>
      </div>
    </section>
  )
}
