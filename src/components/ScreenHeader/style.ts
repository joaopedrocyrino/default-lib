import styled from 'styled-components'

import { ScreenHeaderContainerProps, TextProps } from './dto'

export const ScreenHeaderContainer = styled.div<ScreenHeaderContainerProps>`
    width: 100%;
    height: ${props => typeof props.height === 'string'
        ? props.height
        : `${props.height}px`};
    display: flex;
    font-size: ${props => typeof props.fontSize === 'string'
        ? props.fontSize
        : `${props.fontSize}px`};
    align-items: center;
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex: 2;
    max-width: 60px;
`

export const Text = styled.p<TextProps>`
    padding-left: ${props => props.padding ? '10px' : '0px'};
    flex: 10;
`