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
    color: ${props => palleteToColor(props.text ?? ['text', 2, props.dark])};
`

export const HideContainer = styled.div<DecoratorsProps>`
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    font-size: 22px;
    color: ${props => palleteToColor(props.text ?? ['text', 2, props.dark])};
`

export const Input = styled.input<InputProps>`
    flex: 1;
    padding: 5px;
    height: calc(100% - 10px);
    border: none;
    background: none;
    font-size: ${props => stringOrNumber(props.fontSize ?? 16)};
    color: ${props => palleteToColor(props.text ?? ['text', 1, props.dark])};

    &:focus {
        outline: none;
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${props => palleteToColor(props.text ?? ['text', 2, props.dark])};
        font-family: 'Inter';
    }
    &:-ms-input-placeholder {
        font-family: 'Inter';
        color: ${props => palleteToColor(props.text ?? ['text', 2, props.dark])};
    }
`
