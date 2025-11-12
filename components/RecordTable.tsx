import Card from './Card'

type MatchRecord = { season: string; wins: number; losses: number; draws?: number }

export default function RecordTable({ data }: { data: MatchRecord[] }) {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 pr-4">시즌</th>
              <th className="text-right py-3 pr-4">승</th>
              <th className="text-right py-3 pr-4">패</th>
              <th className="text-right py-3">무</th>
            </tr>
          </thead>
          <tbody>
            {data.map((m) => (
              <tr key={m.season} className="border-b last:border-0">
                <td className="py-3 pr-4">{m.season}</td>
                <td className="py-3 pr-4 text-right font-semibold">{m.wins}</td>
                <td className="py-3 pr-4 text-right">{m.losses}</td>
                <td className="py-3 text-right">{m.draws ?? 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
