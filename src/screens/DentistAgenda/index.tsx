import React, { useState } from 'react'

import { useNotify, useTheme, useAuth, useRouter } from '../../providers'
import { Agenda } from '../../components'
import { Container, Scroll } from '../../layout'
import { Screen } from '../Screen'
import { Props } from './dto'

export const DentistAgenda: React.FC<Props> = () => {
    return (
        <Screen justify='center' header>
            <Agenda />
        </Screen>
    )
}

// export type LoginProps = Props
