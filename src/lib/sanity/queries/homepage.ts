
import { videoSectionFragment } from './video';
import { clientGalleryFragment } from './clientGallery';
import { ctaTabSectionFragment } from './ctaTabs';
import { conceptSectionFragment } from './conceptSection';

export const HOMEPAGE_QUERY = `
  *[_type == "homepage"][0] {
    content[] {
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

      _type == "featuredSection" => {
        _type,
        title,
        type,
        limit
      },

      ${videoSectionFragment},
      ${clientGalleryFragment},
      ${ctaTabSectionFragment},
      ${conceptSectionFragment}
    }
  }
`;
