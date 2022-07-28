import styled from 'styled-components'

import { styledComponentUtils } from '../../utils'
import { InputProps } from './dto'

const { stringOrNumber } = styledComponentUtils

export const FlexBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const IconContainer = styled(FlexBox)`
    height: 100%;
    flex: 1;
    max-width: 30px;
`

export const Input = styled.input<InputProps>`
    flex: 9;
    height: 100%;
    border: none;
    background: none;
    font-size: ${props => props.fontSize ? stringOrNumber(props.fontSize) : '16px'};

        &:focus {
        outline: none;
}
`
