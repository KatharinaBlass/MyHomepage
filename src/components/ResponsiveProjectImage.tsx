import styled from 'styled-components'
import PlaceholderImg from '../graphics/projects/PlaceholderImage.png'
import { getProjectFiles } from '../utils/useProjectImages'

const ProjectPicture = styled.picture`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
`

type ResponsiveProjectImageProps = {
  folderURL?: string
  altText: string
  className?: any
}

export default function ResponsiveProjectImage(
  props: ResponsiveProjectImageProps
) {
  if (!props.folderURL) {
    return (
      <ProjectPicture className={props.className}>
        <Image width="100%" src={PlaceholderImg} alt="" />
      </ProjectPicture>
    )
  }

  // get mapped files for requested folder
  const files = getProjectFiles(props.folderURL)

  const png450 = files['450.png']
  const png600 = files['600.png']
  const png900 = files['900.png']
  const png1200 = files['1200.png']

  const avif450 = files['450.avif']
  const avif600 = files['600.avif']
  const avif900 = files['900.avif']
  const avif1200 = files['1200.avif']

  return (
    <ProjectPicture className={props.className}>
      <source
        type="image/avif"
        srcSet={`${avif450} 450w, ${avif600} 600w, ${avif900} 900w, ${avif1200} 1200w`}
        sizes="(max-width: 800px) 100vw, 50vw"
      />
      <source
        type="image/png"
        srcSet={`${png450} 450w, ${png600} 600w, ${png900} 900w, ${png1200} 1200w`}
        sizes="(max-width: 800px) 100vw, 50vw"
      />
      <Image src={png600} alt={props.altText} />
    </ProjectPicture>
  )
}
