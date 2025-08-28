import ServicesGrid from '@/components/ServicesGrid'
import LeadForm from '@/components/LeadForm'

export default function Page() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-sky-50" />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-medium text-emerald-700">Mockup A · Lead‑First</span>
            <h2 className="mt-4 text-4xl/tight font-extrabold">Honest, local auto repair that puts <span className="text-emerald-700">you</span> first.</h2>
            <p className="mt-4 text-gray-600">Full‑service maintenance & repair for all makes and models. Same‑day diagnostics, fair estimates, and friendly service.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact#leadform" className="rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold shadow hover:bg-emerald-700">Get a Quick Quote</a>
              <a href="tel:+15197725044" className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-medium hover:border-emerald-300">Call (519) 772‑5044</a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm">
              <div className="flex items-center text-amber-500">★★★★★</div>
              <span className="text-gray-700 font-medium">4.8/5</span>
              <span className="text-gray-500">112+ local Google reviews</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gray-200 shadow-xl ring-1 ring-black/5">
              <div className="h-full w-full flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-emerald-600/90" />
                  <p className="text-sm text-gray-500">Hero image area (service bay / team photo)</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-52 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-200">
              <p className="text-xs text-gray-500">Fast Actions</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Oil Change</li>
                <li>• Brakes</li>
                <li>• A/C & Heating</li>
                <li>• Diagnostics</li>
              </ul>
            </div>
          </div>
        </div>
        <ServicesGrid />
        <div className="mt-14 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold">Request a quick quote</h3>
            <p className="mt-2 text-gray-600">Send your plate and what you’re experiencing. We’ll reply with an ETA and estimate.</p>
          </div>
          <LeadForm accent="emerald" />
        </div>
      </div>
    </section>
  )
}
