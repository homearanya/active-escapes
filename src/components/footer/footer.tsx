import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import FooterUnit from './footer-unit'
import NewsletterForm from '../newsletter-form'

const Footer = () => {
  const {
    site: {
      siteMetadata: {
        footerMenu: { menuItems: footerUnits },
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          footerMenu {
            menuItems {
              heading
              menuItems {
                iconClassName
                name
                link
              }
            }
          }
        }
      }
    }
  `)
  const today = new Date()
  const currentYear = today.getFullYear()
  return (
    <footer id="footer">
      <div className="container">
        <NewsletterForm />
        <div className="row footer-holder">
          {footerUnits.map(({ heading, menuItems }, index) => (
            <FooterUnit
              key={index}
              heading={heading}
              menuItems={menuItems}
              last={index === footerUnits - 1}
            />
          ))}
        </div>

        <ul className="social-wrap social-networks">
          <li className="facebook">
            <a
              href="https://facebook.com/activegetaways/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon-facebook"></span>
              <strong className="txt">Follow on</strong>
            </a>
          </li>
          <li className="instagram">
            <a
              href="https://www.instagram.com/activeescapessa/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="ico-instagram ux"></span>
              <strong className="txt">Follow on</strong>
            </a>
          </li>
          <li className="youtube">
            <a
              href="https://www.youtube.com/channel/UCyVrv-D0UfOnaMh-qCaxabA"
              target="_blank"
              rel="noreferrer"
            >
              <span className="ico-youtube ux"></span>
              <strong className="txt">Watch on</strong>
            </a>
          </li>
          <li className="dribble">
            <Link to="/blog/">
              <span className="icon-dribble"></span>
              <strong className="txt">Blog</strong>
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="container text-center">
          <strong className="copyright">
            <i className="fa fa-copyright"></i> Copyright {currentYear} - Active
            Escapes
          </strong>
        </div>
      </div>
    </footer>
  )
}

export default Footer
