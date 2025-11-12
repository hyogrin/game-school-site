import Section from '@/components/Section'
import Stat from '@/components/Stat'
import Card from '@/components/Card'
import Link from 'next/link'
import { records, rosterByRace } from '@/data/school'

export default function HomePage() {
  const totalWins = records.reduce((a, r) => a + r.wins, 0)
  const totalLosses = records.reduce((a, r) => a + r.losses, 0)
  const totalPlayers = Object.values(rosterByRace).reduce((a, v) => a + v, 0)

  return (
    <div className="space-y-10">
      <Section title="게임학교" subtitle="실력과 팀워크로 증명하는 e스포츠 교육 기관">
        <div className="grid sm:grid-cols-3 gap-4">
          <Stat label="총 승" value={totalWins} />
          <Stat label="총 패" value={totalLosses} />
          <Stat label="선수 수" value={totalPlayers} />
        </div>
      </Section>

      <Section title="빠른 이동">
        <div className="grid md:grid-cols-3 gap-4">
          <Card><Link href="/history" className="block">연혁 보기 →</Link></Card>
          <Card><Link href="/records" className="block">전적 보기 →</Link></Card>
          <Card><Link href="/players" className="block">선수 소개 →</Link></Card>
        </div>
      </Section>
    </div>
  )
}
