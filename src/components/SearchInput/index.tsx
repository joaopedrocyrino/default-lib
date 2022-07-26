import React, { useEffect, useState } from 'react'

import { SearchInputProps as props } from './dto'
import { Input, InputProps } from '../Input'

export const SearchInput: React.FC<Omit<InputProps, 'placeholder' | 'value' | 'setValue'> & props> = ({
    onSearch,
    placeholder,
    timeout,
    ...inputProps
}) => {
    const [search, setSearch] = useState<string>('')
    const [timeoutid, setTimeoutid] = useState<NodeJS.Timeout>(setTimeout(() => { }, 0))

    useEffect(() => {
        clearTimeout(timeoutid)

        const id = setTimeout(() => {
            onSearch(search)
        }, timeout ?? 700)

        setTimeoutid(id)
    }, [search])

    return (
        <Input
            {...inputProps}
            placeholder={placeholder ?? 'Buscar...'}
            setValue={setSearch}
            inputmode='search'
            value={search}
            icon='search'
        />
    )
}

export type SearchInputProps = InputProps & props
