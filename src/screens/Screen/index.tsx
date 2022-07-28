import React from 'react'

import { ScreenHeader } from '../../components'
import { Container, Content } from './style'
import { Props } from './dto'

export const Screen: React.FC<Props> = ({
    children,
    header
}) => {
    const headerOpts = typeof header === 'boolean' ? {} : header

    return (
        <Container>
            {!!header && <ScreenHeader {...headerOpts} />}
            <Content header={!!header}>
                {children}
            </Content>
        </Container>
    )
}

export type ScreenProps = Props
