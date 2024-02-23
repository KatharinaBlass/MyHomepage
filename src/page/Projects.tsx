import styled from 'styled-components'

const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 2rem;
`
const ComingSoonText = styled.p`
  font-size: 1.2rem;
  line-height: 180%;
  max-width: 600px;
`

export default function Projects({ id }: { id: string }) {
  return (
    <ProjectsContent id={id}>
      <h1>Projects</h1>
      <ComingSoonText>Coming soon...</ComingSoonText>
    </ProjectsContent>
  )
}
