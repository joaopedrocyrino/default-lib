import React from 'react'

import { Container } from '../Container'
import { Props } from './dto'

export const Scroll: React.FC<Props> = ({
    children,
    width,
    height,
    flexDirection,
    ...props
}) => {
    return (
        <Container
            width={width}
            height={height}
            flexDirection={flexDirection}
            scroll
        >
            <Container {...props} flexDirection={flexDirection} width='fit-content'>
                {children}
            </Container>
        </Container>
    )
}

export type ScrollProps = Props
