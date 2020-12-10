import React, { useState, useRef } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import useResizeObserver from 'use-resize-observer/polyfilled'

const RecentPosts = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { height } = useResizeObserver({
    ref,
  })
  const {
    posts: { edges },
  } = useStaticQuery(graphql`
    query BlogSidebar {
      posts: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "post-page" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              date(formatString: "MMM DD, YYYY")
            }
          }
        }
      }
    }
  `)
  const [open, setOpen] = useState(true)
  return (
    <div className="recent-posts accordion-group">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a
            className={`${open ? '' : 'collapsed'}`}
            onClick={() => setOpen(!open)}
          >
            RECENT POSTS
          </a>
        </h4>
      </div>
      <div
        id="collapse2"
        className={`panel-collapse collapse in`}
        role="tabpanel"
        style={open && height ? { height: `${height + 60}px` } : { height: 0 }}
      >
        <div ref={ref} className="panel-body">
          <ul className="side-list post-list hovered-list">
            {edges.map(({ node: { id, frontmatter } }) => (
              <li key={id}>
                <Link to={`/blog/${frontmatter.slug}/`}>
                  <time>{frontmatter.date}</time>
                  <span className="text-block">{frontmatter.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RecentPosts
