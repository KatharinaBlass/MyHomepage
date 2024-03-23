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
  margin-bottom: ${(props) => props.theme.spacings.xl};
`
const ProjectLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.75rem;
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
    imageAltText: '',
    githubLink: 'https://github.com/JonasFisch/DinnerNightProject',
  },
  {
    title: 'Bubble Bobble Reloaded',
    description:
      "As part of a semester project in my master's programme, we, a group of 6 students, developed a massively multiplayer online game based on the classic Bubble Bobble. I mainly worked on the hand-drawn creation and frame-by-frame animation of assets like the main character and their integration into the code. The finished game, supporting up to 30 players and bots, was presented at Showtime, a public exhibition of all semester projects.",
    typeDeclarations: [ProjectType.design, ProjectType.game],
    techStack: ['Unity C#', '2D Animations', 'Shader Graph', 'Adobe Photoshop'],
    startDate: new Date(2022, 9, 1),
    endDate: new Date(2023, 1, 10),
    imageAltText: '',
    githubLink: 'https://github.com/m2-retro-mmo/bubble-bobble',
    readMoreLink:
      'https://showtime.f4.htw-berlin.de/ws22/master/m2-mmo-bubble-bobble/',
  },
  {
    title: 'Intelligent Balance Group Management',
    description:
      "During a semester project for my master's degree, Exxeta AG assigned HTW students to develop a web-based, serverless application that presents AI-generated energy consumption forecast data to balancing group managers in a comprehensible manner to support their decision making process. Besides the UI implementation, my main task was the UX design of the dashboard, including user interviews and testing. The final application was presented at the Showtime, a public exhibition of all semester projects.",
    typeDeclarations: [ProjectType.design, ProjectType.web],
    techStack: ['React', 'Typescript', 'Tailwind CSS', 'Figma'],
    startDate: new Date(2021, 9, 1),
    endDate: new Date(2022, 1, 10),
    imageAltText: '',
    githubLink: 'https://github.com/HTW-iBKM/frontend',
    readMoreLink:
      'https://showtime.f4.htw-berlin.de/ws21/master/m3-intelligentes-bilanzkreismanagement/',
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
