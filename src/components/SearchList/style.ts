import styled from 'styled-components'

import { styledComponentUtils } from '../../utils'
import { ContainerProps } from './dto'

const { stringOrNumber } = styledComponentUtils

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${props => props.width ? stringOrNumber(props.width) : '100%'};
    height: ${props => props.height ? stringOrNumber(props.height) : '100%'};
`
