import styled from 'styled-components'
import { Icon } from '@iconify/react'

export const FooterContainer = styled.footer`
  display: grid;
  justify-content: center;
  border: 2px solid red;
`

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  max-width: 1200px;
  border: 2px solid blue;
`
export const FooterColumn = styled.div`
  height: auto;
  margin: 10px;
  padding: 10px;
  border: 2px solid yellow;
`
export const FooterH1 = styled.h1`
  font-size: 14px;
  color: white;
`

export const ColumnUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  list-style-type: none;
  margin: 0;
  padding: 0;
`
export const ColumnLi = styled.li`
  color: white;
  font-size: 10px;
  font-family: inherit;
  font-weight: normal;
  cursor: pointer;
`
export const ColumnIcon = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;
  border: 2px solid yellow;
`
export const StyledIcon = styled(Icon)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`
