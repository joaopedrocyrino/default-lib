import React from 'react'
import { TitleContainer } from './style'
import { TitleContainerProps as props } from './dto'

export const Title: React.FC<props> = ({ children, ...rest }) => {
  return (
    <TitleContainer {...rest}>{ children }</TitleContainer>
  )
}