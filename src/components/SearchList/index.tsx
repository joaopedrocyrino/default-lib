import React from 'react'

import { SearchInput } from '../SearchInput'
import { Container, Scroll } from '../../layout'
import { Props } from './dto'

export const SearchList: React.FC<Props> = ({
    children,
    scroll,
    search,
    ...containerProps
}) => {
    const { height: inputHeight, ...restSearch } = search
    const { height: scrollHeight, ...restScroll } = scroll

    return (
        <Container {...containerProps}>
            <SearchInput
                height={inputHeight ?? 40}
                {...restSearch}
            />
            <Scroll
                height={scrollHeight ?? 'calc(100% - 50px)'}
                {...restScroll}
            >
                {children}
            </Scroll>
        </Container>
    )
}

export type SearchListProps = Props
