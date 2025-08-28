import Link from 'next/link';
const services = [
  { slug: 'brakes', title: 'Brakes', desc: 'Squeaks, pads, rotors & fluid' },
  { slug: 'oil-change', title: 'Oil Change', desc: 'Quality oil & OEM filters' },
  { slug: 'diagnostics', title: 'Diagnostics', desc: 'Check‑engine, ABS, sensors' },
  { slug: 'ac-heating', title: 'A/C & Heating', desc: 'Stay comfy all year' },
  { slug: 'tires', title: 'Tires & Rotation', desc: 'Sales, mount & balance' },
  { slug: 'batteries', title: 'Batteries', desc: 'Testing & replacement' },
  { slug: 'exhaust', title: 'Exhaust', desc: 'Leaks, noise & emissions' },
];
export default function ServicesGrid() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {services.map(s => (
        <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
          <div className="h-10 w-10 rounded-xl bg-emerald-100 mb-3" />
          <h3 className="font-semibold">{s.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
        </Link>
      ))}
    </div>
  )
}
