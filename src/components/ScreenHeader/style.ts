import styled from 'styled-components'

import { TextProps } from './dto'

export const Title = styled.p<TextProps>`
    padding-left: ${props => props.padding ? '10px' : '0px'};
    flex: 10;
`
