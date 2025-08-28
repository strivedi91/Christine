import LeadForm from '@/components/LeadForm'

export const metadata = {
  title: 'Contact',
}

export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-extrabold">Contact & Booking</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-gray-700">Call <a className="text-emerald-700 font-medium" href="tel:+15197725044">(519) 772‑5044</a></p>
          <p className="text-gray-700">Email info@christinesautomotive.ca</p>
          <p className="text-gray-700 mt-2">38 Hanson Ave, Unit 2, Kitchener, ON N2C 2E2</p>
          <div className="mt-4 overflow-hidden rounded-2xl border">
            <iframe
              title="Map"
              width="100%"
              height="280"
              loading="lazy"
              src="https://www.google.com/maps?q=38%20Hanson%20Ave%20Unit%202%20Kitchener&output=embed">
            </iframe>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Hours:</strong> Mon‑Thu 8–5 · Fri 8–4</p>
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  )
}
