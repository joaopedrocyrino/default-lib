import React, { createContext, useContext, useEffect, useState } from 'react'

import { IThemeProvider, Props } from './dto'
import { colors } from '../../constants/styles'

const ThemeContext = createContext({})

export const ThemeProvider: React.FC<Props> = ({ children, color }) => {
    const [dark, setDark] = useState<boolean>(false)

    const onChange = (v: boolean) => {
        if (v) {
            localStorage.setItem('theme', 'dark')
            setDark(true)
        } else {
            localStorage.setItem('theme', 'light')
            setDark(false)
        }
    }

    useEffect(() => {
        const persistentTheme = localStorage.getItem('theme')
        if (persistentTheme === 'dark') { setDark(true) }
    }, [])    

    return (
        <ThemeContext.Provider
            value={{
                dark,
                setDark: onChange,
                pallete: Array.isArray(color) ? color : colors.colorPalletes[color ?? 1]
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export type ThemeProviderProps = Props

export const useTheme = (): IThemeProvider => {
    const c = useContext<{ [k: string]: any }>(ThemeContext)
    return {
        dark: c.dark,
        setDark: c.setDark,
        pallete: c.pallete
    }
}
