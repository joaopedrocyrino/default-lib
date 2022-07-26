export interface ScreenContainerProps {
    themeColors: {
        light: {
            background: string
            color: string
        },
        dark?: {
            background: string
            color: string
        }
    }
    theme?: 'dark' | 'light'
    fontSize: number
}

export interface SearchListScreenProps {
    goBack?: () => void
    title: string
    onSearch: (s: string) => void
    placeholder?: string
    children: React.ReactNode[]
    theme?: 'dark' | 'light'
    themeVariables: {
        light: {
            background: string
            color: string
            inputBackground: string
            inputBorder?: string
        },
        dark?: {
            background: string
            color: string
            inputBackground: string
            inputBorder?: string
        }
        headerHeight: number
        headerFontSize: number
        fontSize: number
    }
}
