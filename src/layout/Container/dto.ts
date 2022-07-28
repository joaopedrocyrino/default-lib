import { styledComponentUtils } from '../../utils'
import { LoaderProps } from '../../components'

export interface Props {
    width?: string | number
    height?: string | number
    display?: string
    flexDirection?: 'row' | 'column'
    justify?: 'space-between' | 'center' | 'space-around'
    gap?: string | number
    align?: 'center' | 'flex-start' | 'flex-end' | 'stretch'
    dark?: boolean
    borderRadius?: string | number
    text?: string | styledComponentUtils.textId
    border?: string | styledComponentUtils.backgroundId
    boxShaddow?: string | styledComponentUtils.boxShaddowId
    background?: string | styledComponentUtils.backgroundId
    scroll?: boolean
    loading?: boolean | LoaderProps
    children: any
}