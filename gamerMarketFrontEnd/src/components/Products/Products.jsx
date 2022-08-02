import React from 'react'
import Card from '../Card/Card'
import { CardContainer, Container, Title } from './ProductsElements'
import Aurora from '../../assets/AURORA 2.jpg'

function Products () {
  const Data = [
    {
      img: Aurora,
      name: 'Aurora',
      alt: 'Mouse Aurora',
      description:
        'Mouse ultraliviano de 72 g, diseño simétrico, con sensor PMW 3330, 7200 DPI, 150 IPS, gliders de 100% teflón e iluminación RGB de 16.8 millones de colores configurable por software.',
      price: '124.900'
    },
    {
      img: Aurora,
      alt: 'Image 1',
      description: '15% de descuento'
    },
    {
      img: Aurora,
      alt: 'Image 1',
      description: '15% de descuento'
    },
    {
      img: Aurora,
      alt: 'Image 1',
      description: '15% de descuento'
    },
    {
      img: Aurora,
      alt: 'Image 1',
      description: '15% de descuento'
    },
    {
      img: Aurora,
      alt: 'Image 1',
      description: '15% de descuento'
    },
    {
      img: Aurora,
      alt: 'Image 1',
      description: '15% de descuento'
    },
    {
      img: Aurora,
      alt: 'Image 1',
      description: '15% de descuento'
    }
  ]

  return (
    <Container>
      <Title>Nuestros Productos</Title>
      <CardContainer>
        {Data.map(data => (
          <Card
            key={data.img}
            img={data.img}
            alt={data.alt}
            description={data.description}
          />
        ))}
      </CardContainer>
    </Container>
  )
}

export default Products
