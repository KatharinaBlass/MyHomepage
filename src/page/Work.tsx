import styled, { useTheme } from 'styled-components'
import TimelineItem, { TimelineItemType } from '../components/TimelineItem'

const WorkContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: ${(props) => props.theme.spacings.xl};
`
const SectionTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxl};
`

const workCareer: TimelineItemType[] = [
  {
    organizationName: 'Netlight Consulting',
    title: 'IT Consultant',
    start: new Date(2024, 4, 1),
    end: null,
    description:
      "As IT Consultant at Netlight, I support clients in realizing their IT solutions—not only as a strategic advisor, but as a hands-on contributor embedded within their teams. While my primary technical focus is frontend engineering using React and TypeScript, I also contribute to other areas such as CI/CD, DevOps, authentication, UX design, and accessibility, depending on the client's needs. Beyond technical delivery, I also support the upskilling of the client's internal developers as well as foster improved communication and collaboration both within my team and across departments.",
  },
  {
    organizationName: 'neXenio',
    title: 'Junior Software Engineer',
    start: new Date(2020, 3, 1),
    end: new Date(2020, 9, 30),
    description:
      "After starting as a working student, I transitioned into a Junior Software Engineer role within the Bdrive frontend team. My responsibilities included end-to-end implementation of major new features, with a particular focus on user experience and security. I also actively participated in the team's agile ceremonies and contributed to knowledge-sharing sessions.",
  },
  {
    organizationName: 'neXenio',
    title: 'Working student',
    start: new Date(2019, 11, 1),
    end: new Date(2020, 2, 29),
    description:
      'As part of the Bdrive frontend team, I contributed to the development of new features using React, Redux, and TypeScript, while also maintaining and improving existing components. During my onboarding, I was introduced to agile methodologies and participated test-driven pair programming sessions.',
  },
  {
    organizationName: 'HPI Schul-Cloud',
    title: 'Student assistant',
    start: new Date(2018, 8, 1),
    end: new Date(2019, 1, 28),
    description:
      "In my first role as a Frontend Web Developer, I gained hands-on experience with the fundamentals of HTML, SCSS, and JavaScript and supported a colleague in redesigning the application's help page using AdobeXD.",
  },
]

export default function Work({ id }: { id: string }) {
  const theme = useTheme()
  return (
    <WorkContent id={id}>
      <SectionTitle>Work Experience</SectionTitle>
      <div>
        {workCareer.map((work) => (
          <TimelineItem
            {...work}
            bulletColor={theme.colors.primaryDark}
            key={work.title}
          />
        ))}
      </div>
    </WorkContent>
  )
}
