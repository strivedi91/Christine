export default function Page() {
  const reviews = [
    { name: 'K. Martin', text: 'Friendly, fair, and fast. Explained everything clearly.', stars: 5 },
    { name: 'D. Singh', text: 'Same‑day diagnostics and honest quote. Highly recommend.', stars: 5 },
    { name: 'S. Patel', text: 'No pressure upsells—just solid work.', stars: 5 },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-extrabold">Customer Reviews</h1>
      <p className="mt-2 text-gray-600">A snapshot of what local drivers are saying.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {reviews.map((r,i) => (
          <div key={i} className="rounded-2xl bg-white p-5 border border-gray-200 shadow-sm">
            <div className="text-amber-500">{"★".repeat(r.stars)}</div>
            <p className="mt-2 text-sm text-gray-700">“{r.text}”</p>
            <p className="mt-3 text-xs text-gray-500">— {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
