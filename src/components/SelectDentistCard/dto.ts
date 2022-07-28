export interface FlexContainerProps {
    width?: string | number
    height?: string | number
    flexDirection?: string
    alignItems?: string
    justifyContent?: string
    padding?: string | number
    margin?: string | number
}

export type AppointmentInfoContainerProps = FlexContainerProps & {
    backgroundColor?: string
    borderRadius?: number
    themeColors: ThemeColors
}

export interface ThemeColors {
    light: {
        background: string
        color?: string
        border?: string
    },
    dark?: {
        background: string
        color?: string
        border?: string
    }
}

export interface SelectDentistCardContainerProps {
    width?: string | number
    height?: string | number
    margin?: string | number
    padding?: string | number
    theme?: 'dark' | 'light'
    borderRadius?: string | number
    themeColors: ThemeColors
}

export type SelectDentistCardProps = SelectDentistCardContainerProps & {
    // icon?: 'search' | 'email' | 'user'
    // customIcon?: React.ReactNode
    // type?: 'password' | 'text' | 'number'
    // inputmode?: 'text'| 'decimal' | 'tel' | 'search' | 'email' | 'numeric'
    // placeholder: string
    // value: string | number
    // setValue: (s: string) => void | ((n: number) => void)
}

export interface TextProps {
    fontSize?: number
    color?: string
    margin?: string | number
}

export type TitleContainerProps = TextProps & {
    children: string
}
