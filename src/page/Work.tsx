import styled from 'styled-components'

const WorkContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const ComingSoonText = styled.p`
  font-size: 1.2rem;
  line-height: 180%;
  max-width: 600px;
`

export default function Work({ id }: { id: string }) {
  return (
    <WorkContent id={id}>
      <h1>Work Experience</h1>
      <ComingSoonText>Coming soon...</ComingSoonText>
    </WorkContent>
  )
}