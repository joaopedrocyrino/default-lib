import styled from 'styled-components'

import { ScreenHeaderContainerProps } from './dto'

export const ScreenHeaderContainer = styled.div<ScreenHeaderContainerProps>`
    width: 100%;
    height: ${props => typeof props.height === 'string'
        ? props.height
        : `${props.height}px`};
    display: flex;
    align-items: center;
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex: 1;
`

export const Text = styled.p`
    flex: 9;
`