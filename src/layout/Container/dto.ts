import React from 'react'

import { LoaderProps } from '../../components'
import { backgroundId, boxShaddowId, textId } from '../../dto'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    width?: string | number
    height?: string | number
    padding?: string | number
    maxHeight?: string | number
    maxWidth?: string | number
    minHeight?: string | number
    minWidth?: string | number
    display?: string
    flexDirection?: 'row' | 'column'
    justify?: 'space-between' | 'center' | 'space-around'
    gap?: string | number
    align?: 'center' | 'flex-start' | 'flex-end' | 'stretch'
    dark?: boolean
    borderRadius?: string | number
    text?: string | textId
    border?: string | backgroundId
    boxShaddow?: string | boxShaddowId
    background?: string | backgroundId
    scroll?: boolean
    loading?: boolean | LoaderProps
    fontSize?: string | number
    flex?: number
    children: any
}