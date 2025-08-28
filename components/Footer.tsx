export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-semibold">Christine’s Automotive</p>
          <p className="text-gray-600 mt-1">38 Hanson Ave, Unit 2, Kitchener, ON N2C 2E2</p>
          <p className="text-gray-600">Mon‑Thu 8–5 · Fri 8–4</p>
        </div>
        <div>
          <p className="font-semibold">Popular services</p>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>Brake service</li>
            <li>Oil change</li>
            <li>Tires & rotation</li>
            <li>A/C & heating</li>
            <li>Diagnostics</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Get in touch</p>
          <p className="mt-2 text-gray-600"><a href="tel:+15197725044">(519) 772‑5044</a></p>
          <p className="text-gray-600">info@christinesautomotive.ca</p>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Christine’s Automotive. All rights reserved.
      </div>
    </footer>
  )
}
