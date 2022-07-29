import styled from 'styled-components'

import { styledComponentUtils } from '../../utils'
import { textFormatter } from '../../utils/styledComponent'
import { InputProps, DecoratorsProps } from './dto'

const { stringOrNumber, palleteFormatter } = styledComponentUtils

export const IconContainer = styled.div<DecoratorsProps>`
    height: 100%;
    flex: 1;
    max-width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => palleteFormatter(props.pallete)};
`

export const HideContainer = styled.div<DecoratorsProps>`
    position: absolute;
    right: 10px;
    font-size: 22px;
    color: ${props => palleteFormatter(props.pallete)};
`

export const Input = styled.input<InputProps>`
    flex: 9;
    padding: 5px;
    height: 100%;
    border: none;
    background: none;
    font-size: ${props => props.fontSize ? stringOrNumber(props.fontSize) : '16px'};
    color: ${props => textFormatter({ dark: props.dark })};

    &:focus {
        outline: none;
    }
`
