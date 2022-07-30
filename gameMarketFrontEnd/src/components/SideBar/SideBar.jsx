import React from 'react'
import { Icon } from '@iconify/react'
import {
  SideBarContainer,
  IconDiv,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink
} from './SideBarElements'

function SideBar ({ isOpen, toggle }) {
  return (
    <>
      <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <IconDiv onClick={toggle}>
          <Icon icon='ci:hamburger' color='#fff' />
        </IconDiv>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink to='/' onClick={toggle}>
              Inicio
            </SideBarLink>
            <SideBarLink to='products' onClick={toggle}>
              Productos
            </SideBarLink>
            <SideBarLink to='about-us' onClick={toggle}>
              Nosotros
            </SideBarLink>
            <SideBarLink to='contact-us' onClick={toggle}>
              Contactanos
            </SideBarLink>
          </SideBarMenu>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  )
}

export default SideBar
