import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { MenuItems } from './menu-item'
import { textTruncate } from '../../../utils/helpers'

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
        relativePath: { eq: "generic/activity-slackpacking.JPG" }
      ) {
        childImageSharp {
          fixed(width: 370, height: 175) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      cyclingImg: file(relativePath: { eq: "generic/activity-mtb.jpg" }) {
        childImageSharp {
          fixed(width: 370, height: 175) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      horseridingImg: file(
        relativePath: { eq: "generic/activity-horseriding.JPG" }
      ) {
        childImageSharp {
          fixed(width: 370, height: 175) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      natureImg: file(relativePath: { eq: "generic/activity-nature.JPG" }) {
        childImageSharp {
          fixed(width: 370, height: 175) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      familyImg: file(relativePath: { eq: "generic/activity-family.JPG" }) {
        childImageSharp {
          fixed(width: 370, height: 175) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      groupsImg: file(relativePath: { eq: "generic/activity-groups.jpg" }) {
        childImageSharp {
          fixed(width: 370, height: 175) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      raftingImg: file(relativePath: { eq: "generic/activity-rafting.jpg" }) {
        childImageSharp {
          fixed(width: 370, height: 175) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      runningImg: file(relativePath: { eq: "generic/activity-running.jpg" }) {
        childImageSharp {
          fixed(width: 370, height: 175) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
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
          <div className="row">
            {menuItems.map(({ name, link, img, blurb }) => (
              <div className="col-sm-6 col-md-3">
                <div className="col">
                  <div className="img-wrap">
                    <Link to={link}>
                      <Img
                        fixed={images[img as string].childImageSharp.fixed}
                        alt={name}
                      />
                    </Link>
                  </div>
                  <div className="des">
                    <strong className="title">
                      <Link to={link}>{name}</Link>
                    </strong>
                    <p>{textTruncate(blurb as string, 150)}</p>
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
