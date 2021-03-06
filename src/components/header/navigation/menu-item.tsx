import React, { useState } from 'react'
import UniversalLink from '../../universal-link'
import MenuDropdown from './menu-dropdown'
import MenuMega from './menu-mega'
import useMedia from 'use-media'

type MenuItem = {
  id: string
  name: string
  link: string
  img?: string
  blurb?: string
}

export type MenuItems = MenuItem[]

interface MenuItemProps {
  name: string
  link: string
  megaMenu: boolean
  menuItems: MenuItems
  props?: React.HTMLAttributes<HTMLAnchorElement | HTMLSpanElement>
  closeMenu: () => void
}

const MenuItem = ({
  name,
  link,
  megaMenu = false,
  menuItems,
  closeMenu,
  ...props
}: MenuItemProps) => {
  const isMobile = useMedia({ maxWidth: 992 - 1 })
  const [openDropdown, setOpenDropdown] = useState(false)
  return (
    <li
      onClick={() =>
        isMobile &&
        !!menuItems &&
        setOpenDropdown((openDropdown) => !openDropdown)
      }
      className={
        !!menuItems
          ? `dropdown${megaMenu ? '  has-mega-dropdown' : ''}${
              openDropdown ? ' open' : ''
            }`
          : ''
      }
    >
      <UniversalLink
        activeClassName="active"
        onClick={() => !menuItems && closeMenu()}
        href={link}
        className={`menu-item-header ${!!menuItems ? 'dropdown-toggle' : ''}`}
        data-toggle={`${!!menuItems ? 'dropdown' : undefined}`}
        {...props}
      >
        {name} {!!menuItems ? <b className="icon-angle-down"></b> : null}
      </UniversalLink>
      {!!menuItems && !megaMenu ? (
        <MenuDropdown menuItems={menuItems} closeMenu={closeMenu} />
      ) : null}
      {megaMenu ? <MenuMega menuItems={menuItems} /> : null}
    </li>
  )
}

export default MenuItem
