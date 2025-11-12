export default function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border p-5 text-center">
      <div className="text-3xl font-extrabold">{value}</div>
      <div className="text-gray-600 mt-1">{label}</div>
    </div>
  )
}
