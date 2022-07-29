import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

import { Container } from '../../layout'
import { Title } from './style'
import { Props } from './dto'

export const ScreenHeader: React.FC<Props> = ({
    goBack,
    title,
    ...containerProps
}) => {

    return (
        <Container {...containerProps}>
            {goBack && (
                <Container
                    onClick={goBack}
                    justify='center'
                    maxWidth={60}
                    flex={2}
                >
                    <FaArrowLeft />
                </Container>
            )}
            <Title padding={!goBack}>{title}</Title>
        </Container>
    )
}

export type ScreenHeaderProps = Props
