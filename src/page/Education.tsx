import styled from 'styled-components'
import TimelineItem, { TimelineItemType } from '../components/TimelineItem'

const EducationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const eduCareer: TimelineItemType[] = [
  {
    organizationName: 'Hochschule für Technik und Wirtschaft Berlin',
    title: 'International Media Informatics',
    start: new Date(2020, 9, 1),
    end: new Date(2023, 10, 23),
    degree: 'Master of Science',
    grade: 1.1,
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
  return (
    <EducationContent id={id}>
      <h1>Education</h1>
      <div>
        {eduCareer.map((edu) => (
          <TimelineItem {...edu} bulletColor="#33a8c5" key={edu.title} />
        ))}
      </div>
    </EducationContent>
  )
}
