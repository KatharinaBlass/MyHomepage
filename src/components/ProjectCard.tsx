import styled from 'styled-components'
import Chip from './Chip'
import mockImg from '../graphics/profile/profile-450.png'

export type Project = {
  title: string
  description: string
  techStack: string[]
  githubLink?: string
  deployLink?: string
}

const Card = styled.div`
  padding: ${(props) => `${props.theme.spacings.l} ${props.theme.spacings.m}`};
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 8px;
  box-shadow: 6px 6px 0px 0px ${(props) => `${props.theme.colors.primary}55`};
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
    padding: ${(props) => props.theme.spacings.l};
  }
`
const ProjectImage = styled.img`
  max-height: 300px;
  flex: 1;
  margin: 0;
  margin-bottom: ${(props) => props.theme.spacings.m};

  @media (min-width: 600px) {
    max-width: 250px;
    margin: 0;
    margin-right: ${(props) => props.theme.spacings.m};
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: normal;
  margin: 0 0 ${(props) => props.theme.spacings.m} 0;
`
const Description = styled.p`
  margin: 0 0 ${(props) => props.theme.spacings.m} 0;
`
const TechContainer = styled.div``

export default function ProjectCard(props: Project) {
  return (
    <Card>
      <ProjectImage src={mockImg} alt=""></ProjectImage>
      <TextContainer>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <TechContainer>
          {props.techStack.map((techItem) => (
            <Chip key={techItem}>{techItem}</Chip>
          ))}
        </TechContainer>
      </TextContainer>
    </Card>
  )
}
