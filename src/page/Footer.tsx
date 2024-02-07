import styled from 'styled-components'

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
`

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 Katharina Blaß</p>
    </FooterContainer>
  )
}
