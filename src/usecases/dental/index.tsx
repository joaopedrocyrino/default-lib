import React from 'react'

import { App } from '../app'
import { Props } from './dto'
import { Login, DentistAgenda } from '../../screens'
import { useTheme } from '../../providers'

export const Dental: React.FC<Props> = ({ onLogin }) => {
    const { dark } = useTheme()
    
    return (
        <App
            color={5}
            NotAuthenticated={[['login', <Login onLogin={onLogin} />]]}
            Authenticated={[
                ['home', <DentistAgenda />]
            ]}
        />
    )
}

// export type AppProps = Props

