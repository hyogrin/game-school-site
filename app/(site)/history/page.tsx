import Section from '@/components/Section'
import Card from '@/components/Card'
import { history } from '@/data/school'

export default function HistoryPage() {
  return (
    <Section title="연혁" subtitle="게임학교의 발자취">
      <div className="grid gap-4">
        {history.map(h => (
          <Card key={h.year}>
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">{h.event}</div>
              <div className="text-sm text-gray-600">{h.year}</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
