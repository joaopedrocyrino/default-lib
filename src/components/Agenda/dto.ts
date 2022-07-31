import { color, shaddow } from '../../dto/styles'

export interface Props extends React.HTMLAttributes<HTMLButtonElement>, Omit<ButtonProps, 'dark'> {
    loading?: boolean
}

export interface ButtonProps {
    width?: string | number
    maxWidth?: string | number
    minWidth?: string | number

    height?: string | number
    maxHeight?: string | number
    minHeight?: string | number

    fontSize?: string | number
    text?: color
    dark?: boolean

    display?: 'block' | 'none'

    borderRadius?: string | number
    border?: string | color

    boxShaddow?: shaddow

    background?: color

    position?: 'relative' | 'absolute' | 'fixed'
    top?: string | number
    bottom?: string | number
    left?: string | number
    right?: string | number

    zIndex?: number;

    disabled?: boolean
}
