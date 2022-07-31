import { color, shaddow } from '../../dto/styles'

export interface Props {
    email?: boolean
    background?: color
    inputBackground?: color
    boxShaddow?: shaddow
    placeholder?: string
    onLogin: (user: string, password: string) => Promise<string>
    forgotPassword?: () => void
}
