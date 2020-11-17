import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import GallerySection from '../components/gallery-section'
import PopularTours from '../components/popular-tours'
import BrowserSection from '../components/browser-section'
import BlogSection from '../components/blog-section'
import ReviewsSection from '../components/reviews-section'

interface HomePageProps {
  readonly data: PageQueryData
}

const HomePage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, description },
    },
  },
}: HomePageProps) => (
  <Layout>
    <SEO title={title} description={description} />
    <Banner />
    <GallerySection />
    <PopularTours />
    <BrowserSection />
    <BlogSection />
    <ReviewsSection />
  </Layout>
)

export default HomePage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
    }
  }
}

export const query = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`
