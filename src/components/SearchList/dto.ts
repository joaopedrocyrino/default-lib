import { ContainerProps, ScrollProps } from '../../layout'
import { SearchInputProps } from '../SearchInput'

export interface Props extends Omit<ContainerProps, 'scroll'> { 
    scroll: ScrollProps
    search: SearchInputProps
}
