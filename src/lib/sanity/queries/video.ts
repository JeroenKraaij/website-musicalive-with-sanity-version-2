
// lib/sanity/queries/video.ts

// lib/sanity/queries/video.ts
export const videoSectionFragment = `
  _type == "videoSection" => {
    _type,
    title,
    youtubeId,
    thumbnailUrl,
    minHeight,
    "backgroundUrl": backgroundImage.asset->url
  }
`

