import React, { createContext, useContext, useState, useEffect } from 'react'

import { IRouterProvider, Props } from './dto'
import { NotFound } from '../../screens'
import { useAuth } from '../auth'

const RouterContext = createContext({})

export const RouterProvider: React.FC<Props> = ({ children }) => {
    const [path, setPath] = useState<string>('')
    const { token } = useAuth()

    const renderComponenent = (): React.ReactElement => {
        const record = children.find(r => r[0] === path)

        if (record) {
            return record[1]
        } else { return <NotFound /> }
    }

    useEffect(() => {
        if (path === '') {
            if (token) {
                setPath('home')
            } else { setPath('login') }
        }
    }, [token])

    return (
        <RouterContext.Provider value={{ setPath }}>
            {renderComponenent()}
        </RouterContext.Provider>
    )
}

export type RouterProviderProps = Props

export const useRouter = (): IRouterProvider => {
    const c = useContext<{ [k: string]: any }>(RouterContext)
    return {
        setPath: c.setPath
    }
}
