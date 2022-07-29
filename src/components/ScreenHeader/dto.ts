import { ContainerProps } from '../../layout'

export interface Props extends Omit<ContainerProps, 'children'> {
    title?: string
    goBack?: () => void
}

// ======= STYLED COMPONENTS DTO ========== //

export interface TextProps {
    padding: boolean
}
