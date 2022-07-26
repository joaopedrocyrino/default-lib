import React from 'react'
import ButtonStyle from './style'

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonStyle {...props} />
  )
}

export interface ButtonProps {
  theme: 'dark' | 'light'
  themeColor: {
    dark?: {
      backgroundColor: string
      color: string
      borderColor: string
    }
    light?: {
      backgroundColor: string
      color: string
      borderColor: string
    }
  }
  width?: number
  height?: number
  borderRadius?: number
  border?: number
  children: any
}