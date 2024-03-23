import styled from 'styled-components'
import Chip from './Chip'
import mockImg from '../graphics/projects/PlaceholderImage.png'
import { ReactComponent as ArrowRightIcon } from '../graphics/icons/arrow_forward-24.svg'
import { ReactComponent as GithubMark } from '../graphics/icons/github-mark.svg'
import { ReactComponent as PlayIcon } from '../graphics/icons/play_circle_24.svg'
import { ReactComponent as RocketIcon } from '../graphics/icons/rocket_launch_24.svg'
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
  imageFolderName?: string
  imageAltText: string
  githubLink?: string
  deployLink?: string
  subpageName?: string
}

const Card = styled.div`
  padding: ${(props) => props.theme.spacings.l};
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 8px;
  box-shadow: 8px 8px 0px 0px ${(props) => `${props.theme.colors.primary}55`};
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacings.m};

  @media (min-width: 700px) {
    flex-direction: row;
    gap: ${(props) => props.theme.spacings.l};
  }
`
const ProjectImage = styled(ResponsiveProjectImage)`
  width: 100%;

  @media (min-width: 700px) {
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
  background-color: ${(props) => `${props.theme.colors.primaryDark}33`};
  margin-left: -2px;
  padding: 0 2px;
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
const ExternalLinkContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacings.l};
`
const DetailsLink = styled.a`
  align-items: center;
  display: flex;
  gap: ${(props) => props.theme.spacings.s};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: 600;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaryDark};

  &:hover {
    filter: brightness(1.35);
  }

  &:active {
    filter: brightness(0.65);
  }
`
const IconLink = styled.a`
  color: ${(props) => props.theme.colors.text};

  &:hover {
    filter: brightness(3.5);
  }
`
const GithubIcon = styled(GithubMark)`
  width: ${(props) => props.theme.fontSizes.xxl};
  vertical-align: middle;
`
const DeployIcon = styled(RocketIcon)`
  width: ${(props) => props.theme.fontSizes.xxl};
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
          <ExternalLinkContainer>
            {props.deployLink && (
              <IconLink href={props.deployLink} target="_blank">
                <DeployIcon />
              </IconLink>
            )}
            {props.githubLink && (
              <IconLink href={props.githubLink} target="_blank">
                <GithubIcon />
              </IconLink>
            )}
          </ExternalLinkContainer>
        </LinkContainer>
      </TextContainer>
    </Card>
  )
}
