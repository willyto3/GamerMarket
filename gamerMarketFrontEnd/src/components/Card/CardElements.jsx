import styled, { css } from 'styled-components'

export const FlipCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 504px;
  transition: z-index 500ms, transform 500ms;
  z-index: 0;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  transform-style: preserve-3d;
  padding:10px 0 20px 0;

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
  border-radius: 30px;
  cursor: pointer;
`

export const FlipCardInner = styled.div`
  flex: 1;
  display: flex;
  transition: transform 500ms;
  transform-style: preserve-3d;
  box-shadow: 0 4px 15px #746cfe;
  border-radius: 30px;
  &:hover {
    transform: rotateY(180deg);
  }
`

export const FlipCardFront = styled.img`
  ${CardSide}
  z-index:0;
`
export const FlipCardBack = styled.div`
  ${CardSide}
  transform: rotateY(-180deg) translate(100%,0);
  background: #d7d7d7;
  z-index: 1;
`
