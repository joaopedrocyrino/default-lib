import { ContainerProps } from '../../layout'

export interface Props extends Omit<ContainerProps, 'children'> {
    title?: string
    goBack?: () => void
}
