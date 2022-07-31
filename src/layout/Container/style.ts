import styled from 'styled-components'

import { styledComponent } from '../../utils'
import { ContainerProps } from './dto'

const {
    stringOrNumber,
    palleteToColor,
    idToBoxSaddow
} = styledComponent

export const Container = styled.div<ContainerProps>`
    width: ${props => stringOrNumber(props.width) ?? '100%'};
    ${props => stringOrNumber(props.maxWidth, 'max-width')}
    ${props => stringOrNumber(props.minWidth, 'min-width')}

    height: ${props => stringOrNumber(props.height) ?? '100%'};
    ${props => stringOrNumber(props.maxHeight, 'max-height')}
    ${props => stringOrNumber(props.minHeight, 'min-height')}

    font-size: ${props => stringOrNumber(props.fontSize ?? 16)};
    color: ${props => palleteToColor(props.text ?? ['text', 1, props.dark])};

    display: ${props => props.scroll ? 'block' : props.display ?? 'flex'};

    flex-direction: ${props => props.flexDirection ?? 'column'};
    align-items: ${props => props.align ?? 'center'};
    ${props => stringOrNumber(props.justify, 'justify-content')}
    ${props => stringOrNumber(props.gap, 'gap')}
    ${props => stringOrNumber(`${props.flex}`, 'flex')}

    ${props => stringOrNumber(props.borderRadius, 'border-radius')}
    ${props => stringOrNumber(props.border ? `1px solid ${palleteToColor(props.border)}` : undefined, 'border-radius')}

    ${props => stringOrNumber(props.background ? palleteToColor(props.background) : undefined, 'background-color')}

    overflow-y: ${props => props.scroll && props.flexDirection !== 'row' ? 'scroll' : 'hidden'};
    overflow-x: ${props => props.scroll && props.flexDirection === 'row' ? 'scroll' : 'hidden'};

    box-shadow: ${props => idToBoxSaddow(props.boxShaddow)};

    ${props => stringOrNumber(props.position, 'position')}
    ${props => stringOrNumber(props.bottom, 'bottom')}
    ${props => stringOrNumber(props.top, 'top')}
    ${props => stringOrNumber(props.right, 'right')}
    ${props => stringOrNumber(props.left, 'left')}

    ${props => stringOrNumber(props.zIndex, 'z-index')}

    transition: all ease-in .1s;
`
