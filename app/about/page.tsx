export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-extrabold">About Christine’s Automotive</h1>
      <p className="mt-4 text-gray-700 max-w-3xl">
        We’re a neighbourhood auto repair shop in Kitchener providing honest maintenance and repairs across all makes and models.
        Our mission is simple: keep you safely on the road with transparent estimates, clear communication, and quality work.
      </p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {['Licensed technicians','Modern diagnostics','Fair, transparent pricing'].map(f => (
          <div key={f} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">{f}</div>
        ))}
      </div>
    </section>
  )
}
