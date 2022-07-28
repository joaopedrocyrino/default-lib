import React from 'react'

export interface Props extends ContainerProps, SearchInputProps, ScrollProps { }

export interface SearchInputProps {
    inputWidth?: string | number
    placeholder?: string
    background: string
    color: string
    onSearch?: (s: string) => void
}

export interface ScrollProps {
    children: React.ReactElement[]
    background: string
    color: string
}

// ======= STYLED COMPONENTS DTO ========== //

export interface ContainerProps {
    height?: string | number
    width?: string | number
}
