import styled from 'styled-components'

const EducationContent = styled.div`
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

export default function Education({ id }: { id: string }) {
  return (
    <EducationContent id={id}>
      <h1>Education</h1>
      <ComingSoonText>Coming soon...</ComingSoonText>
    </EducationContent>
  )
}
