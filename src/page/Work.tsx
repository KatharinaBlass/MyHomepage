import styled from 'styled-components'
import TimelineItem, { TimelineItemType } from '../components/TimelineItem'

const WorkContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 2rem;
`

const workCareer: TimelineItemType[] = [
  {
    organizationName: 'neXenio Gmbh',
    title: 'Junior Software Engineer',
    start: new Date(2020, 2, 1),
    end: new Date(2020, 8, 30),
    description:
      'As part of the agile Bdrive front-end web team, I worked on implementing new features within my own milestone using React, Redux and Typescript, and participated in scrum meetings and sprint planning.',
  },
  {
    organizationName: 'neXenio Gmbh',
    title: 'Working student',
    start: new Date(2019, 10, 1),
    end: new Date(2020, 1, 29),
    description:
      'As part of the agile Bdrive frontend web team, I implemented new features using React, Redux and Typescript, as well as maintaining and debugging existing parts of the system.',
  },
  {
    organizationName: 'HPI Schul-Cloud',
    title: 'Student assistant',
    start: new Date(2018, 7, 1),
    end: new Date(2019, 0, 31),
    description:
      "In my first front-end web development role, I implemented small features using HTML, SCSS and JavaScript, and redesigned the application's help page using AdobeXD with a team member.",
  },
]

export default function Work({ id }: { id: string }) {
  return (
    <WorkContent id={id}>
      <h1>Work Experience</h1>
      <div>
        {workCareer.map((work) => (
          <TimelineItem {...work} bulletColor="#243D8D" key={work.title} />
        ))}
      </div>
    </WorkContent>
  )
}
