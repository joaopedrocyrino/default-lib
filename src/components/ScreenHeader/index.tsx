import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

import { Container } from '../../layout'
import { Icon, Title } from './style'
import { Props } from './dto'

export const ScreenHeader: React.FC<Props> = ({
    goBack,
    title,
    ...containerProps
}) => {

    return (
        <Container {...containerProps}>
            {goBack && (
                <Icon onClick={goBack}>
                    <FaArrowLeft />
                </Icon>
            )}
            <Title padding={!goBack}>{title}</Title>
        </Container>
    )
}

export type ScreenHeaderProps = Props
