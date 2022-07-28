import styled from 'styled-components'

import { styledComponentUtils } from '../../utils'
import { Props } from './dto'

const {
    stringOrNumber,
    boxShaddowFormatter,
    backgroundFormatter,
    textFormatter,
    borderFormatter
} = styledComponentUtils

export const Container = styled.div<Props>`
    width: ${props => props.width ? stringOrNumber(props.width) : '100%'};
    height: ${props => props.height ? stringOrNumber(props.height) : '100%'};
    position: relative;
    box-shadow: ${props => boxShaddowFormatter(props.boxShaddow)};
    border-radius: ${props => props.borderRadius
        ? stringOrNumber(props.borderRadius)
        : '0px'};
    background-color: ${props => backgroundFormatter({
            dark: props.dark,
            background: props.background
        })};
    color: ${props => textFormatter({
            dark: props.dark,
            color: props.text
        })};
    border: 1px solid ${props => borderFormatter({
            color: props.border,
            dark: props.dark
        })};
    display: ${props => props.scroll ? 'block' : props.display ?? 'flex'};
    flex-direction: ${props => props.flexDirection ?? 'column'};
    align-items: ${props => props.align ?? 'center'};
    ${props => props.justify ? `justify-content: ${props.justify}` : ''};
    overflow-y: ${props => props.scroll
        ? props.flexDirection === 'row'
            ? 'hidden'
            : 'scroll'
        : 'hidden'};
    overflow-x: ${props => props.scroll
        ? props.flexDirection === 'row'
            ? 'scroll'
            : 'hidden'
        : 'hidden'};
`
