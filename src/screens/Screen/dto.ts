import { ScreenHeaderProps } from '../../components'
import { ContainerProps } from '../../layout'

export interface Props extends ContainerProps {
    header?: ScreenHeaderProps | boolean
    children: any
}
