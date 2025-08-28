import ServicesGrid from '../../components/ServicesGrid'
export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-extrabold">Services</h1>
      <p className="mt-2 text-gray-600">Complete auto care for all makes and models.</p>
      <ServicesGrid />
    </section>
  )
}
