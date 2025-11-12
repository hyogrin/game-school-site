import Section from '@/components/Section'
import PlayerCard from '@/components/PlayerCard'
import { players } from '@/data/school'

export default function PlayersPage() {
  return (
    <Section title="선수 소개" subtitle="팀을 이끄는 플레이어들">
      <div className="grid md:grid-cols-2 gap-4">
        {players.map(p => <PlayerCard key={p.slug} player={p} />)}
      </div>
    </Section>
  )
}
