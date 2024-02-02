import styled from 'styled-components'
import ProfileSVG from '../profile.svg'

const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column-reverse;
  padding: 4% 0;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`
const Profile = styled.img`
  max-width: 500px;
  width: 100%;
  max-height: 40%;

  @media (min-width: 900px) {
    height: 70vh;
    width: 50%;
    max-width: 900px;
    margin-left: 4%;
    max-height: unset;
  }
`
const TextContainer = styled.div`
  max-width: 800px;
  color: #111111;
`
const Headline = styled.span`
  font-size: 2rem;
  font-weight: bold;

  @media (min-width: 450px) {
    font-size: 4rem;
  }
`
const IntroText = styled.h1`
  margin-bottom: 0.2rem;
`
const HelloText = styled(Headline)`
  margin-right: 1rem;

  @media (min-width: 450px) {
    margin-right: 1.75rem;
  }
`
const NameText = styled(Headline)`
  color: #33a8c5;
  display: inline-block;
`
const ProfessionText = styled(Headline)`
  display: block;
`
const ProfileText = styled.p`
  font-size: 1.2rem;
  line-height: 180%;
  max-width: 600px;
`

export default function Home({ id }: { id: string }) {
  return (
    <HomeContent id={id}>
      <TextContainer>
        <IntroText>
          <HelloText>Hi, I'm</HelloText>
          <NameText>Katharina</NameText>
          <ProfessionText>A Frontend Developer</ProfessionText>
        </IntroText>
        <ProfileText>
          I love building modern front-end and mobile applications with fun and
          curiosity. My passion for UX design and accessibility ensures that the
          products I create are intuitive and accessible to all.
        </ProfileText>
      </TextContainer>
      <Profile src={ProfileSVG} alt="That is me smiling at you" />
    </HomeContent>
  )
}
