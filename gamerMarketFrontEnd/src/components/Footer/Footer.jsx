import React from 'react'
import {
  FooterColumn,
  FooterContainer,
  FooterWrapper,
  ColumnUl,
  ColumnLi,
  FooterH1,
  ColumnIcon,
  StyledIcon
} from './FooterElements'

function Footer () {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterColumn>Sobre Nosotros</FooterColumn>
        <FooterColumn>
          <ColumnUl>
            <FooterH1>Productos</FooterH1>
            <ColumnLi>Teclados</ColumnLi>
            <ColumnLi>Audifonos</ColumnLi>
            <ColumnLi>Mouse</ColumnLi>
            <ColumnLi>Mouse Pad</ColumnLi>
          </ColumnUl>
        </FooterColumn>
        <FooterColumn>Subscribete</FooterColumn>
        <FooterColumn>
          <FooterH1>Nuestras Redes</FooterH1>
          <ColumnIcon>
            <StyledIcon icon='cib:instagram' />
            <StyledIcon icon='cib:facebook' />
            <StyledIcon icon='cib:linkedin' />
            <StyledIcon icon='cib:twitch' />
          </ColumnIcon>
        </FooterColumn>
      </FooterWrapper>
      <div>Realizada por Black Dog Solutions Con Mucho Amor</div>
    </FooterContainer>
  )
}

export default Footer
