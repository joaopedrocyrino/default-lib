import React from 'react'

import { ScreenHeader } from '../../components'
import { Container } from '../../layout'
import { Props } from './dto'
import { constants } from '../../styles'

const { screenHeaderHeight } = constants

export const Screen: React.FC<Props> = ({
    children,
    header,
    ...props
}) => {
    return (
        <Container {...props}>
            {!!header && <ScreenHeader {...(typeof header === 'boolean' ? {} : header)} />}
            <Container
                padding='5vw'
                height={`calc(100% - ${!!header
                    ? `${screenHeaderHeight}px`
                    : '0px'
                    })`}
                    
            >
                {children}
            </Container>
        </Container>
    )
}

export type ScreenProps = Props
