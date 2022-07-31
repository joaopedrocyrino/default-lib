import React from 'react'

import { App } from '../app'
import { Props } from './dto'
import { Login, DentistAgenda } from '../../screens'

export const Dental: React.FC<Props> = ({ onLogin }) => {
    return (
        <App
            color={3}
            NotAuthenticated={[['login', <Login onLogin={onLogin} />]]}
            Authenticated={[
                ['home', <DentistAgenda />]
            ]}
        />
    )
}

// export type AppProps = Props

