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
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex: 1;
`

export const Input = styled.input`
    flex: 9;
    height: 100%;
`