
export const clientGalleryFragment = `
  _type == "clientGallery" => {
    _type,
    logos[] {
      alt,
      href,
      src {
        asset->{ url }
      }
    }
  }
`;
