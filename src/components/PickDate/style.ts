import styled from 'styled-components'

import { CardContainerProps } from './dto'

export const CardContainer = styled.div<CardContainerProps>`
    width: ${props => props.width
        ? `${props.width}${typeof props.width === 'string' ? '' : 'px'}`
        : '100%'};
    height: ${props => props.height
        ? `${props.height}${typeof props.height === 'string' ? '' : 'px'}`
        : '100%'};
    margin: ${props => props.margin
        ? `${props.margin}${typeof props.margin === 'string' ? '' : 'px'}`
        : '0'};
    padding: ${props => props.padding
        ? `${props.padding}${typeof props.padding === 'string' ? '' : 'px'}`
        : '0'};
    border-radius: ${props => props.borderRadius
        ? `${props.borderRadius}${typeof props.borderRadius === 'string' ? '' : 'px'}`
        : '6px'};
    background-color: ${props => props.theme === 'dark'
        ? props.themeColors.dark?.background
        : props.themeColors.light.background};
    border: 1px solid ${props => props.theme === 'dark'
        ? props.themeColors.dark?.border ?? 'transparent'
        : props.themeColors.light.border ?? 'transparent'};
`