import { Route } from '../../dto/router'

export interface Props {
    Authenticated?: Route[]
    NotAuthenticated?: Route[]
    tokenExp?: number,
}

export interface IAuthProvider {
    logout: () => void
    setToken: (t?: string) => void
    token: string
}

