import { Route } from '../../dto/router'

export interface Props {
    children: Array<Route>
}

export interface IRouterProvider {
    setPath: (path: string) => void
}
