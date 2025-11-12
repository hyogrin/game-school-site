export default function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="my-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
      </div>
      <div className="grid gap-6">{children}</div>
    </section>
  )
}
