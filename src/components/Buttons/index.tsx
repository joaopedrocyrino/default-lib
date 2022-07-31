import React from 'react'

import { useTheme } from '../../providers'
import { Loader } from '../Loader'
import ButtonStyle from './style'
import { Props } from './dto'

export const Button: React.FC<Props> = ({ children, disabled, loading, background, ...props }) => {
  const theme = useTheme()

  return (
    <ButtonStyle
      disabled={disabled || loading}
      background={background ?? theme.pallete[0]}
      dark={theme.dark}
      {...props}
    >
      {loading ?
        <Loader
          size={20}
          pallete={['background', 0, theme.dark]}
        />
        : children
      }
    </ButtonStyle>
  )
}

export type ButtonProps = Props
