import { ThemeProviderProps, AuthProviderProps } from '../../providers'

export interface Props extends Omit<ThemeProviderProps, 'children'>, AuthProviderProps {}
