import React from 'react'

import { Loader } from '../Loader'
import ButtonStyle from './style'
import { Props } from './dto'
import { colors } from '../../styles/constants'

export const Button: React.FC<Props> = ({ children, disabled, loading, ...props }) => {
  return (
    <ButtonStyle
      {...props}
      disabled={disabled || loading}
    >
      {loading ?
        <Loader
          size={20}
          pallete={props.dark
            ? colors.text[1].light
            : colors.text[1].dark
          }
        />
        : children
      }
    </ButtonStyle>
  )
}

export type ButtonProps = Props
