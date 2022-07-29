import { pallete, boxShaddowId, backgroundId } from '../../dto'

export interface Props {
    email?: boolean
    background?: string | backgroundId
    inputBackground?: string | backgroundId
    boxShaddow?: string | boxShaddowId
    dark?: boolean
    placeholder?: string
    pallete?: pallete
    onLogin: (user: string, password: string) => Promise<void>
    forgotPassword: () => void
}
