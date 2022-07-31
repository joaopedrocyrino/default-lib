import styled from 'styled-components'

import { TextProps } from './dto'
import { palleteToColor, stringOrNumber } from '../../utils/styledComponent'

export const Text = styled.p<TextProps>`
  ${props => stringOrNumber(props.fontStyle, 'font-style')}
  ${props => stringOrNumber(props.fontWeight, 'font-weight')}
  ${props => stringOrNumber(props.lineHeight, 'line-height')}
  ${props => stringOrNumber(props.padding, 'padding')}
  font-size: ${props => stringOrNumber(props.fontSize ?? 16)};
  font-family: ${props => stringOrNumber(props.fontFamily) ?? 'Rubik'};
  color: ${props => palleteToColor(props.text ?? ['text', 1, props.dark])};

  transition: all ease-in .1s;
`