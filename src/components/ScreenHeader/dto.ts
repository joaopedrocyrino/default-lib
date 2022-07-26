export interface ScreenHeaderContainerProps {
    height?: string | number
}

export interface ScreenHeaderProps {
    height: string | number
    title?: string
    goBack?: () => void
}
