import styled from 'styled-components'

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${(props) => props.theme.spacings.m} 0;
  display: flex;
  justify-content: center;
`
const FooterText = styled.p`
  margin: 0;
`

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 Katharina Blaß</FooterText>
    </FooterContainer>
  )
}
