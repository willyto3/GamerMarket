import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  position: sticky;
  align-items: center;
  height: 80px;
  width: 100%;
  top: 0;
  z-index: 10;
  border: 1px solid black;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  z-index: 1;
  padding: 0 24px;
  max-width: 1400px;
  border: 1px solid red;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  color: #746cfe;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: 24px;
  text-decoration: none;
  border: 1px solid blue;
`
export const MobileIcon = styled.div`
  display: none;
  border: 1px solid violet;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #746cfe;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 100%;
`
export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  color: #746cfe;
  height: 100%;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding:0 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: 24px;
  text-decoration: none;
  border: 1px solid blue;

  &.active{
    border-bottom: 3px solid blue;
  }
`
