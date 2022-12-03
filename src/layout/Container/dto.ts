import React from 'react'

import { LoaderProps } from '../../components'
import { color, shaddow } from '../../dto/styles'

export interface Props extends React.HTMLAttributes<HTMLDivElement>, Omit<ContainerProps, 'dark'> {
    loading?: boolean | LoaderProps
}

export interface ContainerProps {
    width?: string | number
    maxWidth?: string | number
    minWidth?: string | number

    height?: string | number
    maxHeight?: string | number
    minHeight?: string | number

    fontSize?: string | number
    text?: color
    dark?: boolean

    display?: 'flex' | 'block' | 'grid' | 'none'
    scroll?: boolean

    flexDirection?: 'row' | 'column'
    justify?: 'space-between' | 'center' | 'space-around'
    align?: 'center' | 'flex-start' | 'flex-end' | 'stretch'
    gap?: string | number
    flex?: number

    borderRadius?: string | number
    border?: color

    boxShaddow?: shaddow

    background?: color

    position?: 'relative' | 'absolute' | 'fixed'
    top?: string | number
    bottom?: string | number
    left?: string | number
    right?: string | number

    padding?: string | number
    margin?: string | number
    gridTemplateColumns?: string

    zIndex?: number;
}