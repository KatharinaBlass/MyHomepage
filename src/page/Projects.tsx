import styled from 'styled-components'

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
const ComingSoonText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.l};
  line-height: 1.8;
  max-width: 600px;
`

export default function Projects({ id }: { id: string }) {
  return (
    <ProjectsContent id={id}>
      <SectionTitle>Projects</SectionTitle>
      <ComingSoonText>Coming soon...</ComingSoonText>
    </ProjectsContent>
  )
}
