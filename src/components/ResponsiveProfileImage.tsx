import styled from 'styled-components'
import PNG1600 from '../graphics/profile/profile-1600.png'
import PNG1200 from '../graphics/profile/profile-1200.png'
import PNG900 from '../graphics/profile/profile-900.png'
import PNG450 from '../graphics/profile/profile-450.png'
import AVIF1600 from '../graphics/profile/profile-1600.avif'
import AVIF1200 from '../graphics/profile/profile-1200.avif'
import AVIF900 from '../graphics/profile/profile-900.avif'
import AVIF450 from '../graphics/profile/profile-450.avif'

const Profile = styled.picture`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;

  @media (max-height: 500px) {
    display: none;
  }

  @media (min-width: 900px) {
    min-width: 50%;
    height: 600px;
    max-width: 900px;
    padding-left: 4%;
  }

  @media (min-width: 1800px) {
    height: 800px;
  }
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export default function ResponsiveProfileImage() {
  return (
    <Profile>
      <source
        type="image/avif"
        srcSet={`${AVIF450} 450w, ${AVIF900} 900w, ${AVIF1200} 1200w, ${AVIF1600} 1600w`}
        sizes="(max-width: 900px) 100vw, 50vw"
        //sizes -> have single column layout for widths<=900px and 2-columns above, thus 50vw remain for image
      />
      <source
        type="image/png"
        srcSet={`${PNG450} 450w, ${PNG900} 900w, ${PNG1200} 1200w, ${PNG1600} 1600w`}
        sizes="(max-width: 450px) 450px, (max-width: 1800px) 900px, 1200px"
      />
      <Image src={PNG900} alt="This is my smile for you" />
    </Profile>
  )
}
