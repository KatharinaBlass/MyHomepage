import styled from 'styled-components'
import ProjectCard, { Project, ProjectType } from '../components/ProjectCard'

const ProjectsContent = styled.div`
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
const ProjectLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

const allProjects: Project[] = [
  {
    title: 'Accessible everGuide app',
    description:
      "As part of my Master's thesis, I worked with the Fraunhofer Institute (FOKUS) to develop an accessible version of their indoor navigation app everGuide for Android. This involved optimising for assistive technologies, applying the WCAG 2.2 standard at level AA+, and conducting interviews and tests with visually impaired users.",
    typeDeclarations: [ProjectType.design, ProjectType.mobile],
    techStack: ['Kotlin', 'WCAG 2.2', 'UX Research', 'Figma'],
    startDate: new Date(2023, 3, 1),
    endDate: new Date(2023, 10, 23),
    imageFolderName: 'everGuide',
    imageAltText: '',
  },
  {
    title: 'Dinner planning app',
    description:
      "During my Master's studies at the HTW, a fellow student and I developed a mobile application for Android and iOS that facilitates the planning of dinner parties with friends. The app offers suitable recipes for a group consensus, taking into account all dietary preferences and allergies of the participants. My responsibilities were the concept and design of the app as well as the implementation of the front-end for Android.",
    typeDeclarations: [ProjectType.design, ProjectType.mobile],
    techStack: ['React Native', 'Google Firebase', 'Figma'],
    startDate: new Date(2022, 9, 1),
    endDate: new Date(2023, 2, 31),
    imageFolderName: 'everGuide',
    imageAltText: '',
  },
]

export default function Projects({ id }: { id: string }) {
  return (
    <ProjectsContent id={id}>
      <SectionTitle>Projects</SectionTitle>
      <ProjectLayoutContainer>
        {allProjects.map((project) => (
          <ProjectCard {...project} key={project.title}></ProjectCard>
        ))}
      </ProjectLayoutContainer>
    </ProjectsContent>
  )
}
