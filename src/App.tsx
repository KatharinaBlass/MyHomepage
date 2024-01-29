import React from 'react'
import styled from 'styled-components'
import profile from './profile.jpg'
import BackgroundSVGDark from './background-dark.svg'
import './App.css'

const AppContent = styled.div`
  padding: 4%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #040d21;
  background-image: url(${BackgroundSVGDark});
  background-size: cover;
`
const Profile = styled.img`
  height: 60vh;
  border-radius: 50%;
  border: 0.25rem solid #33a8c5;
  padding: 1%;
  margin-right: 4%;
`
const TextContainer = styled.div`
  max-width: 40%;
  color: white;
`
const NameText = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`
const ProfessionText = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`
const ProfileText = styled.p`
  font-size: 1.25rem;
`

function App() {
  return (
    <AppContent>
      <Profile src={profile} alt="That is me smiling at you" />
      <TextContainer>
        <NameText>Hi, I'm Katharina</NameText>
        <ProfessionText>A Frontend Developer</ProfessionText>
        <ProfileText>
          I love building modern front-end and mobile applications with fun and
          curiosity. My passion for UX design and accessibility ensures that the
          products I create are intuitive and accessible to all.
        </ProfileText>
      </TextContainer>
    </AppContent>
  )
}

export default App
