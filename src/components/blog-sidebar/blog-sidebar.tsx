import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
const BlogSidebar = () => {
  const {
    posts: { edges },
  } = useStaticQuery(graphql`
    query BlogSidebarQuery {
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
  return (
    <aside id="sidebar" className="col-sm-4 col-md-3 sidebar">
      <div className="sidebar-holder">
        <div className="accordion">
          <div className="accordion-group">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  role="button"
                  data-toggle="collapse"
                  href="#collapse1"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >
                  TOP CATEGORIES
                </a>
              </h4>
            </div>
            <div
              id="collapse1"
              className="panel-collapse collapse in"
              role="tabpanel"
            >
              <div className="panel-body">
                <ul className="side-list category-side-list hovered-list">
                  <li>
                    <a href="#">
                      <span className="text">Travel Advice</span>
                      <span className="count">71</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Interviews</span>
                      <span className="count">79</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Travel Gears</span>
                      <span className="count">33</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Unusual Places</span>
                      <span className="count">93</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Female Travel</span>
                      <span className="count">69</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Random Muses</span>
                      <span className="count">49</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-group">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  role="button"
                  data-toggle="collapse"
                  href="#collapse2"
                  aria-expanded="true"
                  aria-controls="collapse2"
                >
                  RECENT POSTS
                </a>
              </h4>
            </div>
            <div
              id="collapse2"
              className="panel-collapse collapse in"
              role="tabpanel"
            >
              <div className="panel-body">
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
          <div className="accordion-group">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  role="button"
                  data-toggle="collapse"
                  href="#collapse3"
                  aria-expanded="true"
                  aria-controls="collapse3"
                >
                  TAGS
                </a>
              </h4>
            </div>
            <div
              id="collapse3"
              className="panel-collapse collapse in"
              role="tabpanel"
            >
              <div className="panel-body">
                <ul className="side-list horizontal-list hovered-list">
                  <li>
                    <a href="#">
                      <span className="icon-beach"></span>
                      <span className="popup">beach</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-jungle"></span>
                      <span className="popup">jungle</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-desert"></span>
                      <span className="popup">desert</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-mountain"></span>
                      <span className="popup">mountain</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-rural"></span>
                      <span className="popup">rural</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-urban"></span>
                      <span className="popup">urban</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-snow-ice"></span>
                      <span className="popup">snow ice</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-water-sea"></span>
                      <span className="popup">water</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-group">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  role="button"
                  data-toggle="collapse"
                  href="#collapse5"
                  aria-expanded="true"
                  aria-controls="collapse5"
                >
                  SUBSCRIBE
                </a>
              </h4>
            </div>
            <div
              id="collapse5"
              className="panel-collapse collapse in"
              role="tabpanel"
            >
              <div className="panel-body">
                <form className="subscribe-form">
                  <fieldset>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="btn-holder">
                      <button type="submit" className="btn btn-default">
                        SUBSCRIBE
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default BlogSidebar
