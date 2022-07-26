export interface ScreenHeaderContainerProps {
    height: string | number
    fontSize: string | number
}

export type ScreenHeaderProps = ScreenHeaderContainerProps & {
    title?: string
    goBack?: () => void
}

export interface TextProps {
    padding: boolean
}

