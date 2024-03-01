import styled, { useTheme } from 'styled-components'
import TimelineItem, { TimelineItemType } from '../components/TimelineItem'

const EducationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: ${(props) => props.theme.spacings.xl};
  padding-bottom: ${(props) => props.theme.spacings.xxl};
`
const SectionTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxl};
`

const eduCareer: TimelineItemType[] = [
  {
    organizationName: 'Hochschule für Technik und Wirtschaft Berlin',
    title: 'International Media Informatics',
    start: new Date(2020, 9, 1),
    end: new Date(2023, 10, 23),
    degree: 'Master of Science',
    grade: 1.1,
    description:
      "Master's thesis in collaboration with the Fraunhofer Institute on optimising the accessibility of an indoor navigation app with a focus on visually impaired users.",
  },
  {
    organizationName: 'Udacity',
    title: 'User Experience Design',
    start: new Date(2020, 11, 1),
    end: new Date(2021, 1, 27),
    degree: 'Nanodegree',
  },
  {
    organizationName: 'Hasso-Plattner-Institut',
    title: 'IT-Systems Engineering',
    start: new Date(2016, 9, 1),
    end: new Date(2020, 2, 31),
    degree: 'Bachelor of Science',
    grade: 1.8,
  },
  {
    organizationName: 'Friedrich-Schiller-Gymnasium',
    title: 'A-Levels',
    start: new Date(2010, 7, 1),
    end: new Date(2016, 5, 25),
    grade: 1.0,
  },
]

export default function Education({ id }: { id: string }) {
  const theme = useTheme()
  return (
    <EducationContent id={id}>
      <SectionTitle>Education</SectionTitle>
      <div>
        {eduCareer.map((edu) => (
          <TimelineItem
            {...edu}
            bulletColor={theme.colors.primary}
            key={edu.title}
          />
        ))}
      </div>
    </EducationContent>
  )
}
