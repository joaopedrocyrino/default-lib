import React from 'react'

export interface InputContainerProps {
    width?: string | number
    height?: string | number
}

export interface InputProps {
    width?: string | number
    height?: string | number
    icon?: 'search' | 'email' | 'user'
    customIcon?: React.ReactNode
    type?: 'password' | 'text' | 'number'
    inputmode?: 'text'| 'decimal' | 'tel' | 'search' | 'email' | 'numeric'
    value: string | number
    setValue: (s: string) => void | ((n: number) => void)
    placeholder: string
}
