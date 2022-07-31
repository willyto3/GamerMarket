import React from 'react'
import {
  FlipCard,
  FlipCardInner,
  FlipCardFront,
  FlipCardBack
} from './CardElements'
import aurora from '../../assets/AURORA 2.jpg'

function Card () {
  return (
    <FlipCard>
      <FlipCardInner>
        <FlipCardFront src={aurora} alt='aurora' />
        <FlipCardBack>texto texto</FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  )
}

export default Card
