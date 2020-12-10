import React, { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { MenuItems } from './menu-item'
import GridOfCards, { Item } from '../../grid-of-cards'

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
    retreatsImg,
    runningImg,
  } = useStaticQuery(graphql`
    query {
      hikingImg: file(
        relativePath: { eq: "generic/activity-slackpacking.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 390, maxHeight: 180, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      cyclingImg: file(relativePath: { eq: "generic/activity-mtb.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 390, maxHeight: 180, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      horseridingImg: file(
        relativePath: { eq: "generic/activity-horseriding.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 390, maxHeight: 180, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      natureImg: file(relativePath: { eq: "generic/activity-nature.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 390, maxHeight: 180, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      familyImg: file(relativePath: { eq: "generic/activity-family.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 390, maxHeight: 180, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      groupsImg: file(relativePath: { eq: "generic/activity-groups.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 390, maxHeight: 180, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      raftingImg: file(relativePath: { eq: "generic/activity-rafting.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 390, maxHeight: 180, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      retreatsImg: file(relativePath: { eq: "listing/activity-retreat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 390, maxHeight: 180, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      runningImg: file(relativePath: { eq: "generic/activity-running.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 390, maxHeight: 180, quality: 75) {
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
    retreats: retreatsImg,
    running: runningImg,
  }
  const items: Item[] = useMemo(
    () =>
      menuItems.map(({ img, ...rest }) => {
        const image = images[img as string]
        return { ...rest, image }
      }),
    [menuItems, images],
  )
  return (
    <div
      className={`dropdown-menu${className ? ` ${className}` : ''}`}
      {...props}
    >
      <div className="drop-wrap">
        <div className="drop-holder">
          <div className="row menu-mega-row">
            <GridOfCards items={items} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuDropdown
