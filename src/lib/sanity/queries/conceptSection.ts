
export const conceptSectionFragment = `
  _type == "conceptSection" => {
    _type,
    title,
    headingLevel,
    description,
    backgroundImage {
      asset->{ url }
    },
    concepts[] {
      title,
      subtitle,
      link,
      image {
        asset->{ url }
      }
    }
  }
`;
