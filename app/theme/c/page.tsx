import LeadForm from '@/components/LeadForm'

export default function Page() {
  return (
    <section className="relative border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">Mockup C · High‑Contrast</span>
            <h2 className="mt-4 text-4xl/tight font-extrabold">Keep your car happy. Keep your day on track.</h2>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {['Brake service','Oil & filters','Tires & rotation','Batteries','Exhaust','A/C service'].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-600" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact#leadform" className="rounded-xl bg-amber-600 px-5 py-3 text-white font-semibold shadow hover:bg-amber-700">Book in 60 seconds</a>
              <a href="/contact#leadform" className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-medium hover:border-amber-300">Get an estimate</a>
            </div>
          </div>
          <div>
            <div className="aspect-[16/10] w-full overflow-hidden rounded-3xl bg-gray-900 text-white shadow-xl ring-1 ring-black/5">
              <div className="h-full w-full p-6">
                <p className="text-xs uppercase tracking-wider text-gray-400">3 reasons to choose us</p>
                <h3 className="mt-2 text-2xl font-bold">Honest • Diagnostics • Fair pricing</h3>
                <ol className="mt-3 space-y-2 text-sm text-gray-200 list-decimal list-inside">
                  <li>Honest, friendly service</li>
                  <li>Dealer‑level diagnostics</li>
                  <li>Transparent estimates</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold">Request a quick quote</h3>
            <p className="mt-2 text-gray-600">We’ll reply with ETA and pricing options.</p>
          </div>
          <LeadForm accent="amber" />
        </div>
      </div>
    </section>
  )
}
