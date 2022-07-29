import styled from 'styled-components'
import { palleteFormatter, stringOrNumber } from '../../utils/styledComponent'
import { colors } from '../../styles/constants'

import { Props } from './dto'

const Button = styled.button<Props>`
  width: ${props => props.width ? stringOrNumber(props.width) : '100%'};
  height: ${props => props.height ? stringOrNumber(props.height) : '100%'};
  background-color: ${props => props.mode === 2 || props.mode == 3
    ? 'transparent'
    : palleteFormatter(props.pallete)
  };
  color: ${props => props.mode === 3
    ? palleteFormatter(props.pallete)
    : props.dark
      ? colors.text[1].light
      : colors.text[1].dark
  };
  border-radius: ${props => props.borderRadius
    ? stringOrNumber(props.borderRadius)
    : '6px'
  };
  border: ${props => props.mode === 3
    ? 'none'
    : `1px solid ${palleteFormatter(props.pallete)}`
  };
  font-size: ${props => props.fontSize ? stringOrNumber(props.fontSize) : '16px'};
  font-weight: 600;
  position: relative;
`

export default Button
