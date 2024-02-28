import styled from 'styled-components'
import ResponsiveProfileImage from '../components/ResponsiveProfileImage'

const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
  flex-direction: column-reverse;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 450px) {
    padding-top: ${(props) => props.theme.spacings.l};
  }
`
const TextContainer = styled.div`
  max-width: 800px;
`
const Headline = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  font-weight: bold;

  @media (min-width: 900px) {
    font-size: ${(props) => props.theme.fontSizes.xxxl};
  }
`
const HelloText = styled(Headline)`
  margin-right: 0.8rem;

  @media (min-width: 900px) {
    margin-right: 1.5rem;
  }
`
const NameText = styled(Headline)`
  color: ${(props) => props.theme.colors.primary};
  display: inline-block;
`
const ProfessionText = styled(Headline)`
  display: block;
`
const ProfileText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.l};
  line-height: 1.8;
  max-width: 600px;
`

export default function Home({ id }: { id: string }) {
  return (
    <HomeContent id={id}>
      <TextContainer>
        <h1>
          <HelloText>Hi, I'm</HelloText>
          <NameText>Katharina</NameText>
          <ProfessionText>A Frontend Developer</ProfessionText>
        </h1>
        <ProfileText>
          I love building modern front-end and mobile applications with fun and
          curiosity. My passion for UX design and accessibility ensures that the
          products I create are intuitive and accessible to all.
        </ProfileText>
      </TextContainer>
      <ResponsiveProfileImage />
    </HomeContent>
  )
}
