import React, { createContext, useContext, useEffect, useState } from 'react'
import moment from 'moment'

import { IAuthProvider, Props } from './dto'
import { Loader } from '../../components'
import { Container } from '../../layout'
import { useNotify } from '../notify'
import { useTheme } from '../theme'
import { RouterProvider } from '../router'

const AuthContext = createContext({})

export const AuthProvider: React.FC<Props> = ({
    Authenticated,
    NotAuthenticated,
    tokenExp,
}) => {
    const [token, setToken] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const { notify } = useNotify()
    const { pallete, dark } = useTheme()

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('tokenExp')
        setToken('')
    }

    const setPersistentToken = (t?: string) => {
        if (t) {
            localStorage.setItem('token', t)
            localStorage.setItem('tokenExp', moment().add(tokenExp ?? 10, 'hours').toISOString())
            setToken(t)
        } else { logout() }
    }

    useEffect(() => {
        const persitentTokenExp = localStorage.getItem('tokenExp')
        const persitentToken = localStorage.getItem('token')

        if (persitentTokenExp && persitentToken) {
            if (moment().add(4, 'hours').isBefore(moment(persitentTokenExp))) {
                setToken(persitentToken)
            } else {
                logout()
                notify('Sessão expirada', 'warning')
            }
        }

        setLoading(false)
    }, [])

    return (
        <AuthContext.Provider
            value={{
                token,
                setToken: setPersistentToken,
                logout
            }}
        >
            {loading
                ? (
                    <Container
                        background={['background', 0, dark]}
                        justify='center'
                    >
                        <Loader pallete={pallete[0]} />
                    </Container>
                )
                : (
                    <RouterProvider>
                        {token
                            ? Authenticated ?? []
                            : NotAuthenticated ?? []
                        }
                    </RouterProvider>
                )
            }
        </AuthContext.Provider>
    )
}

export type AuthProviderProps = Props

export const useAuth = (): IAuthProvider => {
    const c = useContext<{ [k: string]: any }>(AuthContext)
    return {
        token: c.token,
        setToken: c.setToken,
        logout: c.logout
    }
}
