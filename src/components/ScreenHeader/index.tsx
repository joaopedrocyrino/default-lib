import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

import {
    ScreenHeaderContainer,
    IconContainer,
    Text
} from './style'
import { ScreenHeaderProps as props } from './dto'

export const ScreenHeader: React.FC<props> = ({
    height,
    goBack,
    title
}) => {

    return (
        <ScreenHeaderContainer height={height}>
            {goBack && (
                <IconContainer>
                    <FaArrowLeft />
                </IconContainer>
            )}
            <Text>{title}</Text>
        </ScreenHeaderContainer>
    )
}

export type ScreenHeaderProps = props
