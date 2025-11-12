import Link from 'next/link'
import Card from './Card'
import Badge from './Badge'

export default function PlayerCard({ player }: { player: any }) {
  return (
    <Link href={`/players/${player.slug}`}>
      <Card>
        <div className="flex items-center gap-4">
          <img src={player.image} alt={player.name} className="h-16 w-16 rounded-full object-cover" />
          <div>
            <div className="font-bold text-lg">{player.name}</div>
            <div className="text-sm text-gray-600">포지션: {player.position}</div>
            <div className="mt-2 flex gap-2 flex-wrap">
              <Badge>{player.race}</Badge>
              <Badge>승률 {player.winRate}%</Badge>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
