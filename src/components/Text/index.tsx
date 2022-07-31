import React from 'react'

import { Text as StyledText } from './style'
import { Props } from './dto'
import { useTheme } from '../../providers'

export const Text: React.FC<Props> = (props) => {
  const { dark } = useTheme()

  return (
    <StyledText {...props} dark={dark} />
  )
}

export type TextProps = Props