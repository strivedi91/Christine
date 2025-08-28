export default function ReviewsStrip() {
  return (
    <div className="mt-14 grid md:grid-cols-3 gap-4">
      {[
        '“Friendly, fair, and fast. Explained everything clearly and got me back on the road.”',
        '“Transparent estimate and same‑day service. My go‑to shop in Kitchener.”',
        '“Honest diagnostics—fixed what mattered, no pressure upsells.”'
      ].map((quote, i) => (
        <div key={i} className="rounded-2xl bg-white p-5 border border-gray-200 shadow-sm">
          <div className="text-amber-500">★★★★★</div>
          <p className="mt-2 text-sm text-gray-700">{quote}</p>
          <p className="mt-3 text-xs text-gray-500">Local Google review</p>
        </div>
      ))}
    </div>
  )
}
