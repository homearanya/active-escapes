import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import FooterUnit from './footer-unit'

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
        <form
          action="php/subscribe.html"
          id="signup"
          method="post"
          className="newsletter-form"
        >
          <fieldset>
            <div className="input-holder">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="subscriber_email"
                id="subscriber_email"
              />
              <input type="submit" value="GO" />
            </div>
            <span className="info" id="subscribe_message">
              To receive news, updates and tour packages via email.
            </span>
          </fieldset>
        </form>

        <div className="row footer-holder">
          {footerUnits.map(({ heading, menuItems }, index) => (
            <FooterUnit
              key="heading"
              heading={heading}
              menuItems={menuItems}
              last={index === footerUnits - 1}
            />
          ))}
        </div>

        <ul className="social-wrap social-networks">
          <li className="facebook">
            <a href="https://facebook.com/activegetaways/">
              <span className="icon-facebook"></span>
              <strong className="txt">Follow on</strong>
            </a>
          </li>
          <li className="youtube">
            <a href="https://www.youtube.com/channel/UCyVrv-D0UfOnaMh-qCaxabA">
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
