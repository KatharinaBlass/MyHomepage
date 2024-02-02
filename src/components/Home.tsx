import styled from 'styled-components'
import ProfileSVG from '../profile.svg'

const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const Profile = styled.img`
  height: 70vh;
  max-width: 50%;
  margin-left: 3%;
`
const TextContainer = styled.div`
  max-width: 800px;
  color: #111111;
`
const IntroText = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
`
const NameText = styled.span`
  display: inline-block;
  margin-left: 1.75rem;
  color: #33a8c5;
`
const ProfessionText = styled.span`
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
          Hi, I'm
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
