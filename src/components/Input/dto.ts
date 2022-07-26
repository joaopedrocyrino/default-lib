import React from 'react'

export interface ThemeColors {
    light: {
        background: string
        color: string
        border?: string
    },
    dark?: {
        background: string
        color: string
        border?: string
    }
}

export interface InputContainerProps {
    width?: string | number
    height?: string | number
    margin?: string | number
    padding?: string | number
    theme?: 'dark' | 'light'
    borderRadius?: string | number
    themeColors: ThemeColors
}

export type InputProps = InputContainerProps & {
    icon?: 'search' | 'email' | 'user'
    customIcon?: React.ReactNode
    type?: 'password' | 'text' | 'number'
    inputmode?: 'text'| 'decimal' | 'tel' | 'search' | 'email' | 'numeric'
    placeholder: string
    value: string | number
    setValue: (s: string) => void | ((n: number) => void)
}
