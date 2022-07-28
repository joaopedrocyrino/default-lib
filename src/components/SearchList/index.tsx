import React from 'react'

import { SearchInput } from '../../components'
import { Container } from './style'
import { Props } from './dto'

export const ScreenHeader: React.FC<Props> = ({
    children,
    inputWidth,
    color,
    background,
    placeholder,
    ...containerProps
}) => {
    return (
        <Container {...containerProps}>
            <SearchInput
                height={inputWidth ?? 40}
                onSearch={onSearch}
                placeholder={placeholder}
            />
        </Container>
    )
}

export type ScreenHeaderProps = Props
