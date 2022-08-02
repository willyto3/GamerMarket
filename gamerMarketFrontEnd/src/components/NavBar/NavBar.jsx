import React from 'react'
import { Icon } from '@iconify/react'
import {
  Nav,
  NavBarWrapper,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavBarElements'

function NavBar ({ toggle }) {
  const Links = [
    {
      path: '/',
      title: 'Inicio'
    },
    {
      path: '/products',
      title: 'Productos'
    },
    {
      path: '/about-us',
      title: 'Nosotros'
    },
    {
      path: '/contact-us',
      title: 'Contactanos'
    }
  ]

  return (
    <Nav>
      <NavBarWrapper>
        <NavLogo to='/'>GAMER MARKET</NavLogo>
        <MobileIcon onClick={toggle}>
          <Icon icon='ci:hamburger' />
        </MobileIcon>

        <NavMenu>
          {Links.map(({ path, title }) => (
            <NavItem key={title}>
              <NavLinks to={path}>{title}</NavLinks>
            </NavItem>
          ))}
        </NavMenu>
      </NavBarWrapper>
    </Nav>
  )
}

export default NavBar
