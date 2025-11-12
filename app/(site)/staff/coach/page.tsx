import Section from '@/components/Section'
import Card from '@/components/Card'
import { coach } from '@/data/school'

export default function CoachPage() {
  return (
    <Section title="감독 소개" subtitle="팀의 철학과 리더십">
      <Card>
        <div className="flex flex-col md:flex-row items-start gap-6">
          <img src={coach.image} alt={coach.name} className="h-40 w-40 rounded-2xl object-cover" />
          <div>
            <h3 className="text-xl font-bold">{coach.name}</h3>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
              {coach.career.map((c: string) => <li key={c}>{c}</li>)}
            </ul>
            <p className="mt-4 text-gray-700">{coach.bio}</p>
          </div>
        </div>
      </Card>
    </Section>
  )
}
