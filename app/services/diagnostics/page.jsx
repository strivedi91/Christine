import Link from 'next/link'
export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <p className="text-sm text-gray-500"><Link href="/services" className="hover:underline">Services</Link> / Diagnostics</p>
      <h1 className="mt-2 text-4xl font-extrabold">Diagnostics</h1>
      <p className="mt-4 text-gray-700 max-w-3xl">
        Modern scan tools and experience to get to the root cause—check‑engine lights, ABS, misfires and more.
      </p>
      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="font-semibold">Typical turnaround</p>
        <p className="text-gray-600 text-sm">Same‑day or next‑day depending on parts availability.</p>
        <a href="/contact#leadform" className="mt-4 inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700">Get a quote</a>
      </div>
    </section>
  )
}
