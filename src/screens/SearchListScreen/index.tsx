import React from 'react'

import { ScreenContainer } from './style'
import { SearchListScreenProps as props } from './dto'
import { ScreenHeader, Input } from '../../components'
import { List } from '../../layout'

export const SearchListScreen: React.FC<props> = ({ 
    children,
     goBack, 
     title,
     search,
     setSearch
    }) => {
    const headerHeight = 50
    const inputHeight = 40

    return (
        <ScreenContainer>
            <ScreenHeader
                height={headerHeight}
                title={title}
                goBack={goBack}
            />
            <Input
                placeholder='Buscar...'
                height={inputHeight}
                setValue={setSearch}
                inputmode='search'
                value={search}
                icon='search'
            />
            <List height={`calc(100% - ${headerHeight + inputHeight + 20}px)`}>
                {children}
            </List>
        </ScreenContainer>
    )
}

export type SearchListScreenProps = props
