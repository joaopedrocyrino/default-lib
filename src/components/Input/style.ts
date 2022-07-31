import styled from 'styled-components'

import { styledComponent } from '../../utils'
import { InputProps, DecoratorsProps } from './dto'

const { stringOrNumber, palleteToColor } = styledComponent

export const IconContainer = styled.div<DecoratorsProps>`
    height: 100%;
    flex: 1;
    max-width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => palleteToColor(props.pallete)};
`

export const HideContainer = styled.div<DecoratorsProps>`
    position: absolute;
    right: 10px;
    font-size: 22px;
    color: ${props => palleteToColor(props.pallete)};
`

export const Input = styled.input<InputProps>`
    flex: 9;
    padding: 5px;
    height: 100%;
    border: none;
    background: none;
    font-size: ${props => stringOrNumber(props.fontSize ?? 16)};
    color: ${props => palleteToColor(props.text ?? ['text', 1, props.dark])};

    &:focus {
        outline: none;
    }
`
