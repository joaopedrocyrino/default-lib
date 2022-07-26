import styled from 'styled-components'

import { ScreenContainerProps } from './dto'

export const ScreenContainer = styled.div<ScreenContainerProps>`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: ${props => props.theme === 'dark'
        ? props.themeColors.dark?.background
        : props.themeColors.light.background};
    color: ${props => props.theme === 'dark'
        ? props.themeColors.dark?.color
        : props.themeColors.light.color};
    font-size: ${props => typeof props.fontSize === 'string'
        ? props.fontSize
        : `${props.fontSize}px`};
`
