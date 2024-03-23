import styled from 'styled-components'
import Chip from './Chip'
import mockImg from '../graphics/projects/PlaceholderImage.png'
import { ReactComponent as ArrowRightIcon } from '../graphics/icons/arrow_forward-24.svg'
import { ReactComponent as GithubMark } from '../graphics/icons/github-mark.svg'
import ResponsiveProjectImage from './ResponsiveProjectImage'

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
  imageFolderName: string
  imageAltText: string
  githubLink?: string
  deployLink?: string
  subpageName?: string
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
  gap: ${(props) => props.theme.spacings.m};

  @media (min-width: 600px) {
    flex-direction: row;
    gap: ${(props) => props.theme.spacings.l};
  }
`
const ProjectImage = styled(ResponsiveProjectImage)`
  width: 100%;

  @media (min-width: 600px) {
    min-width: 45%;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.m};
`
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: normal;
  margin: 0;
`
const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.s};
  margin: 0;
`
const ProjectTypeInfo = styled.span`
  font-size: inherit;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => `${props.theme.colors.primary}33`};
`
const Description = styled.p`
  margin: 0;
`
const TechContainer = styled.div`
  display: flex;
  gap: 0.5rem 1rem;
  flex-wrap: wrap;
`
const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const IconLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaryDark};

  &:hover {
    filter: brightness(1.35);
  }

  &:active {
    filter: brightness(0.65);
  }
`
const DetailsLink = styled(IconLink)`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
`
const GithubIcon = styled(GithubMark)`
  height: 2rem;
  width: 2rem;
  vertical-align: middle;
`

export default function ProjectCard(props: Project) {
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    year: 'numeric',
  }

  return (
    <Card>
      <ProjectImage
        folderURL={props.imageFolderName}
        altText={props.imageAltText}
      ></ProjectImage>
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
        <TechContainer>
          {props.techStack.map((techItem) => (
            <Chip key={techItem}>{techItem}</Chip>
          ))}
        </TechContainer>
        <Description>{props.description} </Description>
        <LinkContainer>
          {props.subpageName && (
            <DetailsLink href={`./projects/${props.subpageName}`}>
              Read more <ArrowRightIcon />
            </DetailsLink>
          )}
          {props.githubLink && (
            <IconLink href={props.githubLink} target="_blank">
              <GithubIcon />
            </IconLink>
          )}
        </LinkContainer>
      </TextContainer>
    </Card>
  )
}
