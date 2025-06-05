
import { videoSectionFragment } from './video'

export const HOMEPAGE_QUERY = `
  *[_type == "homepage"][0] {
    content[]{
      _type,
      _type == "heroSection" => {
        _type,
        title,
        headingLevel,
        overlay,
        gradientOpacity,
        subtitle,
        cta {
          label,
          href
        },
        backgroundImage {
          asset->{ url }
        }
      },
      ${videoSectionFragment}
    }
  }
`
