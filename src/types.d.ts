import { FluidObject, FixedObject } from 'gatsby-image'

interface ImageSharp {
  childImageSharp: {
    fluid?: FluidObject
    fixed?: FixedObject
  }
  publicURL?: string
}

interface Reference {
  id?: string
  frontmatter: {
    code: string
    activityName?: string
    destinationName?: string
    icon?: string
    title?: string
  }
}
