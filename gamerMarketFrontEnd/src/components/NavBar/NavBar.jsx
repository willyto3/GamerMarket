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
  return (
    <>
      <Nav>
        <NavBarWrapper>
          <NavLogo to='/'>GAMER MARKET</NavLogo>
          <MobileIcon onClick={toggle}>
            <Icon icon='ci:hamburger' />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/'>Inicio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='products'>Productos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about-us'>Nosotros</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact-us'>Contactanos</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarWrapper>
      </Nav>
    </>
  )
}

export default NavBar
