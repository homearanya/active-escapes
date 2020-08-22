import React, { useState } from 'react'
import { graphql } from 'gatsby'

import { ImageSharp } from '../types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BannerActivity, {
  BannerActivityData,
} from '../components/banner-activity'
import FAQBlock from '../components/tour-faq/faq-block'

interface FAQSPageProps {
  readonly data: PageQueryData
}

const FAQSPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        meta: { title, description },
        banner,
        intro,
        faqs,
      },
    },
  },
}: FAQSPageProps) => {
  const [activeTab, setActiveTab] = useState<number | null>(null)
  const breadcrumbs: Breadcrumbs = [
    { id: '1', name: 'home', href: '/' },
    { id: '2', name: 'frequently asked questions', href: '' },
  ]
  const bannerData: BannerActivityData = {
    heading: banner.heading,
    subHeading: banner.subHeading,
    heroImage: banner.image.childImageSharp.fluid,
    breadcrumbs,
  }

  return (
    <Layout>
      <SEO title={title} description={description} />
      <BannerActivity data={bannerData} />
      <div className="content-block bg-white content-center faq-page">
        <div className="container">
          <header className="content-heading">
            <h2 className="main-heading">{intro.heading}</h2>
            {intro.description.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            <div className="seperator"></div>
          </header>
          <div className="row">
            <div className="col-md-offset-2 col-md-8">
              <ol className="detail-accordion">
                {faqs.map(({ question, answer }, i) => {
                  const active = i === activeTab
                  return (
                    <li
                      key={i}
                      className={`faq ${active ? ' active' : ''}`}
                      onClick={() =>
                        setActiveTab((prevActiveTab) =>
                          prevActiveTab === i ? null : i,
                        )
                      }
                    >
                      <FAQBlock data={{ question, answer }} active={active} />
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FAQSPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      meta: {
        title: string
        description: string
      }
      banner: {
        heading: string
        subHeading: string
        image: ImageSharp
      }
      intro: {
        heading: string
        description: string[]
      }
      faqs: {
        question: string
        answer: string[]
      }[]
    }
  }
}

export const query = graphql`
  query FAQSPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        meta {
          title
          description
        }
        banner {
          heading
          subHeading
          image {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        intro {
          heading
          description
        }
        faqs {
          question
          answer
        }
      }
    }
  }
`
