import { FluidObject, FixedObject } from 'gatsby-image'

interface ImageSharp {
  childImageSharp: {
    fluid?: FluidObject
    fixed?: FixedObject
  }
  publicURL?: string
}

interface Reference {
  frontmatter: {
    code: string
    activityName?: string
    destinationName?: string
  }
}
