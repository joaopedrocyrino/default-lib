import styled from 'styled-components'

import { InputContainerProps } from './dto'

export const InputContainer = styled.div<InputContainerProps>`
    width: ${props => props.width
        ? typeof props.width === 'string'
            ? props.width
            : `${props.width}px`
        : '100%'};
    height: ${props => props.height
        ? typeof props.height === 'string'
            ? props.height
            : `${props.height}px`
        : '100%'};
    display: flex;
    position: relative;
    align-items: center;
    margin: ${props => props.margin
        ? `${props.margin}${typeof props.margin === 'string' ? '' : 'px'}`
        : '0px'};
    padding: ${props => props.padding
        ? `${props.padding}${typeof props.padding === 'string' ? '' : 'px'}`
        : '0px'};
    border-radius: ${props => props.borderRadius
        ? `${props.borderRadius}${typeof props.borderRadius === 'string' ? '' : 'px'}`
        : '6px'};
    background-color: ${props => props.theme === 'dark'
        ? props.themeColors.dark?.background
        : props.themeColors.light.background};
    color: ${props => props.theme === 'dark'
        ? props.themeColors.dark?.color
        : props.themeColors.light.color};
    border: 1px solid ${props => props.theme === 'dark'
        ? props.themeColors.dark?.border ?? 'transparent'
        : props.themeColors.light.border ?? 'transparent'};
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex: 1;
    max-width: 30px;
`

export const Input = styled.input`
    flex: 9;
    height: 100%;
    border: none;
    background: none;
    font-size: 16px;

    &:focus {
        outline: none;
    }
`