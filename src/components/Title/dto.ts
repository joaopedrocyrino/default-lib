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
  color?: string
  margin?: string | number
  themeColors?: ThemeColors
}

export type TitleContainerProps = TitleProps & {
  children: string
}
