import Section from '@/components/Section'
import Card from '@/components/Card'
import { getRecords } from '@/lib/api'

export const revalidate = 60

function pct(a: number, b: number) { return (a + b) === 0 ? 0 : Math.round((a / (a + b)) * 100) }

export default async function DashboardPage() {
  const data = await getRecords()
  const totalWins = data.reduce((a, r) => a + r.wins, 0)
  const totalLosses = data.reduce((a, r) => a + r.losses, 0)
  const winPct = pct(totalWins, totalLosses)

  return (
    <Section title="점수 대시보드" subtitle="FastAPI 연동 실시간 지표">
      <div className="grid md:grid-cols-3 gap-4">
        <Card><div className="text-4xl font-extrabold">{totalWins}</div><div className="text-gray-600">총 승</div></Card>
        <Card><div className="text-4xl font-extrabold">{totalLosses}</div><div className="text-gray-600">총 패</div></Card>
        <Card><div className="text-4xl font-extrabold">{winPct}%</div><div className="text-gray-600">총 승률</div></Card>
      </div>
      <div className="mt-6 grid gap-3">
        {data.map(r => (
          <Card key={r.season}>
            <div className="flex items-center justify-between">
              <div className="font-semibold">{r.season}</div>
              <div className="text-sm text-gray-700">{r.wins}W / {r.losses}L / {r.draws ?? 0}D</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
