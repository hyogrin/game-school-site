import Section from '@/components/Section'
import OrgChart from '@/components/OrgChart'
import { orgRoot } from '@/data/school'

export default function OrgChartPage() {
  return (
    <Section title="조직도" subtitle="팀/스태프 조직 구조">
      <OrgChart root={orgRoot} />
    </Section>
  )
}
