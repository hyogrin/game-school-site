export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-soft">{children}</div>
  )
}
