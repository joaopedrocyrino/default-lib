import React from 'react'

export interface ListContainerProps {
    width?: string | number
    height?: string | number
    orientation?: 'horizontal' | 'vertical'
}

export interface ListRecordsProps {
    orientation?: 'horizontal' | 'vertical'
    gap?: number | string
}

export interface ListProps {
    width?: string | number
    height?: string | number
    orientation?: 'horizontal' | 'vertical'
    gap?: number | string
    children: React.ReactNode[]
}
