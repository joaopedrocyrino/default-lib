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
    title,
    fontSize
}) => {

    return (
        <ScreenHeaderContainer
            height={height}
            fontSize={fontSize}
        >
            {goBack && (
                <IconContainer onClick={goBack}>
                    <FaArrowLeft />
                </IconContainer>
            )}
            <Text padding={!goBack}>{title}</Text>
        </ScreenHeaderContainer>
    )
}

export type ScreenHeaderProps = props
