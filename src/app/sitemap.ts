import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://calebbettcher.com', lastModified: new Date() },
    { url: 'https://calebbettcher.com/about', lastModified: new Date() },

    { url: 'https://calebbettcher.com/projects', lastModified: new Date() },
    { url: 'https://calebbettcher.com/projects/CalebBettcherDotCom', lastModified: new Date() },
    { url: 'https://calebbettcher.com/projects/LAIRresearch', lastModified: new Date() },

    { url: 'https://calebbettcher.com/resume', lastModified: new Date() },
    { url: 'https://calebbettcher.com/contact', lastModified: new Date() },
    { url: 'https://calebbettcher.com/experience', lastModified: new Date() },
    { url: 'https://calebbettcher.com/resume', lastModified: new Date() },
  ]
}