import React from 'react'

import { ListContainer, ListRecords } from './style'
import { ListProps as props } from './dto'

export const List: React.FC<props> = ({ children, orientation, gap, width, height }) => {
    return (
        <ListContainer
            orientation={orientation}
            width={width}
            height={height}
        >
            <ListRecords
                orientation={orientation}
                gap={gap}
            >
                {children}
            </ListRecords>
        </ListContainer>
    )
}

export type ListProps = props
