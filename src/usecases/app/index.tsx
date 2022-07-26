import React from 'react'

import { ThemeProvider, NotifyProvider, AuthProvider } from '../../providers'
import { Props } from './dto'

import '../../styles/fonts/Inter/styles.css'
import '../../styles/fonts/Rubik/styles.css'

export const App: React.FC<Props> = ({ color, ...auth }) => {
    return (
        <ThemeProvider color={color}>
            <NotifyProvider>
                <AuthProvider {...auth} />
            </NotifyProvider>
        </ThemeProvider>
    )
}

export type AppProps = Props

