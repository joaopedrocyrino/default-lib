import React from 'react'

import { CardContainer } from './style'
import { CardProps as props } from './dto'

export const Card: React.FC<props> = ({ children, ...rest }) => {
    return (
        <CardContainer {...rest}>
            {children}
        </CardContainer>
    )
}

export type CardProps = props
