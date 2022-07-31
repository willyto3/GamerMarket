import styled, { css } from 'styled-components'

export const FlipCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 504px;
  transition: z-index 500ms, transform 500ms;
  z-index: 0;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  transform-style: preserve-3d;

  &:hover {
    z-index: 1;
  }
`
export const CardSide = css`
  width: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 2px solid #0d0d0d;
`

export const FlipCardInner = styled.div`
  flex: 1;
  display: flex;
  transition: transform 500ms;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
`

export const FlipCardFront = styled.img`
  ${CardSide}
  z-index:0;
  background: white;
`
export const FlipCardBack = styled.div`
  ${CardSide}
  transform: rotateY(-180deg) translate(100%,0);
  background: #d7d7d7;
  z-index: 1;
`
