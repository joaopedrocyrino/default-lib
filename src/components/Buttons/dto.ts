import { pallete } from '../../dto'

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    width?: number | string
    height?: number | string
    borderRadius?: number | string
    dark?: boolean
    pallete?: pallete
    loading?: boolean
    disabled?: boolean
    children: any
    mode?: 1 | 2 | 3
    fontSize?: string | number
}