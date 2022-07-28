import { TitleProps } from './dto';
import styled from 'styled-components'

export const TitleContainer = styled.h1<TitleProps>`
  font-family: ${props => props.fontFamily ? props.fontFamily : 'Rubik'};
  font-style: ${props => props.fontStyle || 'normal'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 600};
  font-size: ${props => props.fontSize || 16}px;
  line-height: ${props => props.lineHeight || 19}px;
  color: ${props => props.color};
  margin: ${props => props.margin
    ? `${props.margin}${typeof props.margin === 'string' ? '' : 'px'}`
    : '0px'};
`