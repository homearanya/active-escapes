import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import GallerySection from '../components/gallery-section'
import PopularTours from '../components/popular-tours'
import BrowserSection from '../components/browser-section'
import BlogSection from '../components/blog-section'
import ReviewsSection from '../components/reviews-section'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <GallerySection />
    <PopularTours />
    <BrowserSection />
    <BlogSection />
    <ReviewsSection />
  </Layout>
)

export default IndexPage
