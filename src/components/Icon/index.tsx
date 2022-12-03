import React from 'react'
import { palleteToColor } from '../../utils/styledComponent'

import { IconProps as Props } from './dto'

export const Icon: React.FC<Props> = ({ Icon, iconColor, size, style }) => {
  return (
    <Icon
      style={style}
      size={size ?? 22}
      color={palleteToColor(iconColor)}
    />
  )
}

export type IconProps = Props