import Section from '@/components/Section'
import Card from '@/components/Card'
import { rosterByRace } from '@/data/school'

export default function RacesPage() {
  const entries = Object.entries(rosterByRace)
  const total = entries.reduce((a, [,v]) => a + v, 0)
  return (
    <Section title="종족별 구성" subtitle="Terran / Zerg / Protoss / 기타">
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <ul className="space-y-2">
            {entries.map(([race, count]) => (
              <li key={race} className="flex items-center justify-between">
                <span className="font-medium">{race}</span>
                <span>{count}명</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <div className="text-sm text-gray-600">총 인원: {total}명</div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {entries.map(([race, count]) => (
              <div key={race} className="rounded-xl border p-3 text-center">
                <div className="text-2xl font-bold">{Math.round((count/total)*100)}%</div>
                <div className="text-xs mt-1">{race}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  )
}
