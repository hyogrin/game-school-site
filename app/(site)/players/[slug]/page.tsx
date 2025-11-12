import { players } from '@/data/school'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import { notFound } from 'next/navigation'
import { getPlayerStats } from '@/lib/api'

export async function generateStaticParams() {
  return players.map(p => ({ slug: p.slug }))
}

export default async function PlayerDetail({ params }: { params: { slug: string } }) {
  const player = players.find(p => p.slug === params.slug)
  if (!player) return notFound()

  let stats: Awaited<ReturnType<typeof getPlayerStats>> | null = null
  try {
    stats = await getPlayerStats(player.slug)
  } catch {}

  return (
    <Section title={player.name} subtitle={player.position}>
      <Card>
        <div className="flex flex-col md:flex-row items-start gap-6">
          <img src={player.image} alt={player.name} className="h-40 w-40 rounded-2xl object-cover" />
          <div className="space-y-3">
            <div className="flex gap-2 flex-wrap">
              <Badge>{player.race}</Badge>
              <Badge>승률 {stats?.winRate ?? player.winRate}%</Badge>
            </div>
            {stats?.recent && (
              <div className="text-sm text-gray-700">
                최근 경기: {stats.recent.map((r, i) => (
                  <Badge key={i}>{r}</Badge>
                ))}
              </div>
            )}
            <p className="text-gray-700 leading-relaxed">{player.bio}</p>
          </div>
        </div>
      </Card>
    </Section>
  )
}
