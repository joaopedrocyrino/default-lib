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

export interface CardContainerProps {
    width?: string | number
    height?: string | number
    margin?: string | number
    padding?: string | number
    theme?: 'dark' | 'light'
    borderRadius?: string | number
    themeColors: ThemeColors
}

export type CardProps = CardContainerProps & {
    children: any
}
