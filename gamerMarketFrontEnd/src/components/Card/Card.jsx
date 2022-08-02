import React from 'react'
import {
  FlipCard,
  FlipCardInner,
  FlipCardFront,
  FlipCardBack
} from './CardElements'

function Card ({ img, alt, description }) {
  return (
    <FlipCard>
      <FlipCardInner>
        <FlipCardFront src={img} alt={alt} />
        <FlipCardBack>{description}</FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  )
}

export default Card
