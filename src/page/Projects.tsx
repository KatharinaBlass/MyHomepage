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
const ProjectLayoutContainer = styled.div``

const allProjects: Project[] = [
  {
    title: 'Accessible everGuide app',
    description:
      "As part of my Master's thesis, I worked with the Fraunhofer Institute to develop an accessible version of their indoor navigation app everGuide for Android. This involved optimising for assistive technologies, applying the WCAG 2.2 standard at level AA+, and conducting interviews and tests with visually impaired users.",
    typeDeclarations: [ProjectType.design, ProjectType.mobile],
    techStack: ['Kotlin', 'WCAG 2.2', 'UX Research', 'Figma'],
    startDate: new Date(2023, 3, 1),
    endDate: new Date(2023, 10, 23),
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
