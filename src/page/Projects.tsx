import styled from 'styled-components'
import ProjectCard, { Project, ProjectType } from '../components/ProjectCard'

const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: ${(props) => props.theme.spacings.l};
`
const SectionTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxl};
`
const ProjectLayoutContainer = styled.div``

const allProjects: Project[] = [
  {
    title: 'Accessible everGuide app',
    description:
      'Im Rahmen meiner Masterarbeit habe ich in Zusammenarbeit mit dem Fraunhofer Institut eine barrierefreie Version ihrer  Indoor-Navigations-Android-App everGuide entwickelt und mit blinden Nutzern getestet.',
    typeDeclarations: [ProjectType.design, ProjectType.mobile],
    techStack: ['Kotlin', 'WCAG 2.2', 'user testing', 'Figma'],
    startDate: new Date(2023, 3, 1),
    endDate: new Date(2023, 10, 23),
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
