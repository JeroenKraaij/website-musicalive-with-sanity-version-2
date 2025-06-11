
export const ctaTabSectionFragment = `
  _type == "ctaTabSection" => {
    _type,
    title,
    subtitle,
    tabs[] {
      key,
      label,
      title,
      description,
      icon,
      href,
      image {
        asset->{ url }
      }
    }
  }
`;
