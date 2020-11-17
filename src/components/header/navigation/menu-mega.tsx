import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { MenuItems } from './menu-item'

interface MenuDropdownProps {
  menuItems: MenuItems
  className?: string
  props?: React.HTMLAttributes<HTMLAnchorElement | HTMLSpanElement>
}

const MenuDropdown = ({
  menuItems,
  className = '',
  ...props
}: MenuDropdownProps) => {
  const {
    hikingImg,
    cyclingImg,
    horseridingImg,
    natureImg,
    familyImg,
    groupsImg,
    raftingImg,
    runningImg,
  } = useStaticQuery(graphql`
    query {
      hikingImg: file(
        relativePath: { eq: "generic/activity-slackpacking.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 370, maxHeight: 175, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      cyclingImg: file(relativePath: { eq: "generic/activity-mtb.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 370, maxHeight: 175, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      horseridingImg: file(
        relativePath: { eq: "generic/activity-horseriding.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 370, maxHeight: 175, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      natureImg: file(relativePath: { eq: "generic/activity-nature.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 370, maxHeight: 175, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      familyImg: file(relativePath: { eq: "generic/activity-family.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 370, maxHeight: 175, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      groupsImg: file(relativePath: { eq: "generic/activity-groups.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 370, maxHeight: 175, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      raftingImg: file(relativePath: { eq: "generic/activity-rafting.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 370, maxHeight: 175, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      runningImg: file(relativePath: { eq: "generic/activity-running.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 370, maxHeight: 175, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
    }
  `)
  const images = {
    hiking: hikingImg,
    cycling: cyclingImg,
    horseriding: horseridingImg,
    nature: natureImg,
    family: familyImg,
    groups: groupsImg,
    rafting: raftingImg,
    running: runningImg,
  }
  return (
    <div
      className={`dropdown-menu${className ? ` ${className}` : ''}`}
      {...props}
    >
      <div className="drop-wrap">
        <div className="drop-holder">
          <div className="row menu-mega-row">
            {menuItems.map(({ name, link, img, blurb }) => (
              <div key={link} className="col-sm-6 col-md-3 menu-mega-col">
                <div className="col">
                  <div className="img-wrap">
                    <Link to={link}>
                      <Img
                        fluid={images[img as string].childImageSharp.fluid}
                        alt={name}
                      />
                    </Link>
                  </div>
                  <div className="des">
                    <strong className="title">
                      <Link to={link}>{name}</Link>
                    </strong>
                    <p>{blurb}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuDropdown
