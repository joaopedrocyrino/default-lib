import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

import { Container } from '../../layout'
import { Text } from '../Text'
import { ThemeChanger } from '../ThemeChanger'
import { Props } from './dto'

export const ScreenHeader: React.FC<Props> = ({
    goBack,
    title,
    ...containerProps
}) => {
    return (
        <Container
            {...containerProps}
            position='relative'
            flexDirection='row'
        >
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
            <Text padding='0 0 0 10px'>{title}</Text>
            <ThemeChanger />
        </Container>
    )
}

export type ScreenHeaderProps = Props
