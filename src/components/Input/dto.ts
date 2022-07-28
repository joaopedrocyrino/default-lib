import React from 'react'

import { ContainerProps } from '../../layout'

export interface Props extends ContainerProps, InputProps {
    icon?: 'search' | 'email' | 'user'
    customIcon?: React.ReactNode
    setValue: (s: string) => void | ((n: number) => void)
}

export interface InputProps {
    placeholder?: string
    value: string | number
    fontSize?: string | number
    type?: 'password' | 'text' | 'number'
    inputmode?: 'text' | 'decimal' | 'tel' | 'search' | 'email' | 'numeric'
    disabled?: boolean
}
