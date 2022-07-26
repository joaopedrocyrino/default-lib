import styled from 'styled-components'

import { ListContainerProps, ListRecordsProps } from './dto'

export const ListContainer = styled.div<ListContainerProps>`
    width: ${props => props.width
        ? typeof props.width === 'string'
            ? props.width
            : `${props.width}px`
        : '100%'};
    height: ${props => props.height
        ? typeof props.height === 'string'
            ? props.height
            : `${props.height}px`
        : '100%'};
    overflow-y: ${props => props.orientation !== 'horizontal'
        ? 'scroll'
        : 'hidden'};
    overflow-x: ${props => props.orientation === 'horizontal'
        ? 'scroll'
        : 'hidden'};
`

export const ListRecords = styled.div<ListRecordsProps>`
    display: flex;
    gap: ${props => props.gap ?
        typeof props.gap === 'string'
            ? props.gap
            : `${props.gap}px`
        : '10px'};
    align-items: center;
    width: ${props => props.orientation === 'horizontal'
        ? 'fit-content'
        : '100%'};
    height: ${props => props.orientation !== 'horizontal'
        ? 'fit-content'
        : '100%'};
    flex-direction: ${props => props.orientation === 'horizontal'
        ? 'row'
        : 'column'};
`
