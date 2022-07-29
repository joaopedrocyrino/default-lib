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
    ${props => props.maxHeight ? `max-height: ${stringOrNumber(props.maxHeight)};` : ''}
    ${props => props.maxWidth ? `max-width: ${stringOrNumber(props.maxWidth)};` : ''}
    ${props => props.minHeight ? `min-height: ${stringOrNumber(props.minHeight)};` : ''}
    ${props => props.minWidth ? `min-width: ${stringOrNumber(props.minWidth)};` : ''}
    font-size: ${props => props.fontSize ? stringOrNumber(props.fontSize) : '16px'};
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
    ${props => props.justify ? `justify-content: ${props.justify};` : ''}
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
    ${props => props.flex ? `flex: ${props.flex};` : ''}
    ${props => props.flex ? `flex: ${props.flex};` : ''}
    ${props => props.padding ? `padding: ${stringOrNumber(props.padding)};` : ''}
    ${props => props.gap ? `gap: ${stringOrNumber(props.gap)};` : ''}
`
