import styled from 'styled-components'
import Chip from './Chip'
import mockImg from '../graphics/projects/PlaceholderImage.png'

export enum ProjectType {
  design = 'Design',
  mobile = 'Mobile',
  game = 'Game',
  web = 'Web',
}

export type Project = {
  title: string
  description: string
  typeDeclarations: ProjectType[]
  techStack: string[]
  startDate: Date
  endDate: Date
  githubLink?: string
  deployLink?: string
}

const Card = styled.div`
  padding: ${(props) => props.theme.spacings.l};
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 8px;
  box-shadow: 6px 6px 0px 0px ${(props) => `${props.theme.colors.primary}55`};
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => props.theme.spacings.m};

  @media (min-width: 600px) {
    flex-direction: row;
  }
`
const ProjectImage = styled.img`
  max-height: 300px;
  flex: 1;
  margin: 0;
  margin-bottom: ${(props) => props.theme.spacings.s};
  max-width: 100%;

  @media (min-width: 600px) {
    max-width: 300px;
    width: 35%;
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
const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.s};
  margin: 0 0 ${(props) => props.theme.spacings.m} 0;
`
const ProjectTypeInfo = styled.span`
  font-size: inherit;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => `${props.theme.colors.primary}33`};
`
const Description = styled.p`
  margin: 0 0 ${(props) => props.theme.spacings.m} 0;
`
const TechContainer = styled.div`
  display: flex;
  gap: 0.5rem 1rem;
  flex-wrap: wrap;
`

export default function ProjectCard(props: Project) {
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    year: 'numeric',
  }

  return (
    <Card>
      <ProjectImage src={mockImg} alt=""></ProjectImage>
      <TextContainer>
        <Title>{props.title}</Title>
        <Subtitle>
          <ProjectTypeInfo>
            {props.typeDeclarations.join(' & ')}
          </ProjectTypeInfo>
          {' | ' +
            props.startDate.toLocaleString('en-US', dateFormatOptions) +
            ' - ' +
            props.endDate.toLocaleString('en-US', dateFormatOptions)}
        </Subtitle>
        <Description>{props.description} </Description>
        <TechContainer>
          {props.techStack.map((techItem) => (
            <Chip key={techItem}>{techItem}</Chip>
          ))}
        </TechContainer>
      </TextContainer>
    </Card>
  )
}
