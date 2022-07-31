import styled from 'styled-components'
import { idToBoxSaddow, palleteToColor, stringOrNumber } from '../../utils/styledComponent'

import { ButtonProps } from './dto'

const Button = styled.button<ButtonProps>`
  width: ${props => stringOrNumber(props.width) ?? '100%'};
  ${props => stringOrNumber(props.maxWidth, 'max-width')}
  ${props => stringOrNumber(props.minWidth, 'min-width')}

  height: ${props => stringOrNumber(props.height) ?? '100%'};
  ${props => stringOrNumber(props.maxHeight, 'max-height')}
  ${props => stringOrNumber(props.minHeight, 'min-height')}

  font-size: ${props => stringOrNumber(props.fontSize ?? 16)};
  color: ${props => palleteToColor(props.text ?? ['background', 0, props.dark])};

  ${props => stringOrNumber(props.borderRadius, 'border-radius')}
  background-color: ${props => palleteToColor(props.background)};
  border: ${props => props.border ? `1px solid ${palleteToColor(props.border)}` : 'none'};

  box-shadow: ${props => idToBoxSaddow(props.boxShaddow)};

  ${props => stringOrNumber(props.position, 'position')}
  ${props => stringOrNumber(props.bottom, 'bottom')}
  ${props => stringOrNumber(props.top, 'top')}
  ${props => stringOrNumber(props.right, 'right')}
  ${props => stringOrNumber(props.left, 'left')}

  ${props => stringOrNumber(props.zIndex, 'z-index')}

  transition: all ease-in .1s;
`

export default Button
