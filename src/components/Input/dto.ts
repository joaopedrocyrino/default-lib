import React from 'react'

import { ContainerProps } from '../../layout'
import { color } from '../../dto/styles'

export interface Props extends
    Omit<ContainerProps, 'children'>,
    Omit<InputProps, 'dark'>,
    DecoratorsProps {
    icon?: 'search' | 'email' | 'user'
    customIcon?: React.ReactNode
    setValue: (s: string) => void | ((n: number) => void)
}

export interface InputProps {
    placeholder?: string
    value: string | number
    fontSize?: string | number
    type?: 'password' | 'text' | 'number'
    text?: color
    inputmode?: 'text' | 'decimal' | 'tel' | 'search' | 'email' | 'numeric'
    disabled?: boolean
    dark?: boolean
}

export interface DecoratorsProps {
    pallete?: color
    text?: color
    dark?: boolean
}
