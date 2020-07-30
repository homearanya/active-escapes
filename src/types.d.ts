import { FluidObject, FixedObject } from 'gatsby-image'

interface ImageSharp {
  childImageSharp: {
    fluid?: FluidObject
    fixed?: FixedObject
  }
  publicURL?: string
}
