import { color } from '../../dto/styles'

export interface ThemeColors {
  light: {
    background: string
    border?: string
  },
  dark?: {
    background: string
    border?: string
  }
}

export interface TitleProps {
  fontFamily?: string
  fontWeight?: number
  fontStyle?: string
  fontSize?: number
  lineHeight?: number
  text?: color
  margin?: string | number
  themeColors?: ThemeColors
  dark?: boolean
}

export type TitleContainerProps = TitleProps & {
  children: string
}
