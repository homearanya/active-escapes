import React, { useState } from 'react'
import UniversalLink from '../../universal-link'
import MenuDropdown from './menu-dropdown'
import useMedia from 'use-media'

type MenuItem = {
  name: string
  link: string
}

export type MenuItems = MenuItem[]

interface MenuItemProps {
  name: string
  link: string
  menuItems: MenuItems
  props?: React.HTMLAttributes<HTMLAnchorElement | HTMLSpanElement>
}

const MenuItem = ({ name, link, menuItems, ...props }: MenuItemProps) => {
  const isMobile = useMedia({ maxWidth: 992 - 1 })
  const [openDropdown, setOpenDropdown] = useState(false)
  return (
    <li
      onClick={() =>
        isMobile &&
        !!menuItems &&
        setOpenDropdown((openDropdown) => !openDropdown)
      }
      className={!!menuItems ? `dropdown${openDropdown ? ' open' : ''}` : ''}
    >
      <UniversalLink
        activeClassName="active"
        href={link}
        className={`menu-item-header ${!!menuItems ? 'dropdown-toggle' : ''}`}
        data-toggle={`${!!menuItems ? 'dropdown' : undefined}`}
        {...props}
      >
        {name} {!!menuItems ? <b className="icon-angle-down"></b> : null}
      </UniversalLink>
      {!!menuItems ? <MenuDropdown menuItems={menuItems} /> : null}
    </li>
  )
}

export default MenuItem
