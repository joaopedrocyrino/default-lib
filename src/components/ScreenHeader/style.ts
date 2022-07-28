import styled from 'styled-components'

import { styledComponentUtils } from '../../utils'
import { constants } from '../../styles'
import { ContainerProps, TextProps } from './dto'

const { stringOrNumber, idToBoxShaddow } = styledComponentUtils
const { screenHeaderHeight } = constants

const FlexBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled(FlexBox)<ContainerProps>`
    font-weight: 700;

    ${props => props.color ? `color: ${props.color};`  : ''}
    ${props => props.background ? `background-color: ${props.background};`  : ''}
    font-size: ${props => props.fontSize ? stringOrNumber(props.fontSize) : '19px'};
    box-shadow: ${props => props.boxShaddow ? idToBoxShaddow(props.boxShaddow) : 'none'};
    height: ${props => props.height ? stringOrNumber(props.height) : `${screenHeaderHeight}px`};
`

export const Icon = styled(FlexBox)`
    flex: 2;
    max-width: 60px;
`

export const Title = styled.p<TextProps>`
    padding-left: ${props => props.padding ? '10px' : '0px'};
    flex: 10;
`
