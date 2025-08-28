import Link from 'next/link'

export default function Home() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-extrabold">Choose your homepage style</h1>
      <p className="mt-3 text-gray-600">Pick one of the three hero styles below. All routes and secondary pages are already wired.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Link href="/theme/a" className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md">
          <p className="text-sm text-emerald-700">Mockup A</p>
          <h2 className="text-xl font-bold mt-1">Lead‑First (Classic)</h2>
          <p className="text-gray-600 mt-2">Big CTA + services chips</p>
        </Link>
        <Link href="/theme/b" className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md">
          <p className="text-sm text-sky-700">Mockup B</p>
          <h2 className="text-xl font-bold mt-1">Modern Trust</h2>
          <p className="text-gray-600 mt-2">Story + trust badges</p>
        </Link>
        <Link href="/theme/c" className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md">
          <p className="text-sm text-amber-700">Mockup C</p>
          <h2 className="text-xl font-bold mt-1">Bold Contrast</h2>
          <p className="text-gray-600 mt-2">High‑impact with steps</p>
        </Link>
      </div>
    </section>
  )
}
