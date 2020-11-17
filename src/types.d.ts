import { FluidObject, FixedObject } from 'gatsby-image'

type Maybe<T> = T | null

interface ImageSharp {
  readonly childImageSharp: {
    fluid?: Maybe<FluidObject>
    fixed?: Maybe<FixedObject>
  }
  readonly publicURL?: string
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
