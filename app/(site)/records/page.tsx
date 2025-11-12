import Section from '@/components/Section'
import RecordTable from '@/components/RecordTable'
import { getRecords } from '@/lib/api'
import { records as localRecords } from '@/data/school'

export const revalidate = 60 // ISR: 60초마다 재검증

export default async function RecordsPage() {
  let data
  try {
    data = await getRecords()
  } catch (e) {
    data = localRecords
  }
  return (
    <Section title="전적" subtitle="시즌별 성적 (API 연동)">
      <RecordTable data={data} />
    </Section>
  )
}
