import React from 'react'

import { List } from '../../layout'
import { ScreenContainer } from './style'
import { SearchListScreenProps as props } from './dto'
import { ScreenHeader, SearchInput } from '../../components'

export const SearchListScreen: React.FC<props> = ({
    children,
    goBack,
    title,
    placeholder,
    onSearch,
    theme,
    themeVariables
}) => {
    const inputHeight = 40

    return (
        <ScreenContainer
            fontSize={themeVariables.fontSize}
            theme={theme}
            themeColors={{
                light: {
                    background: themeVariables.light.background,
                    color: themeVariables.light.color
                },
                dark: themeVariables.dark
                    ? {
                        background: themeVariables.dark.background,
                        color: themeVariables.dark.color
                    }
                    : undefined
            }}
        >
            <ScreenHeader
                fontSize={themeVariables.headerFontSize}
                height={themeVariables.headerHeight}
                title={title}
                goBack={goBack}
            />
            <SearchInput
                height={inputHeight}
                width='90%'
                onSearch={onSearch}
                placeholder={placeholder}
                themeColors={{
                    light: {
                        background: themeVariables.light.inputBackground,
                        color: themeVariables.light.color,
                        border: themeVariables.light.inputBorder
                    },
                    dark: themeVariables.dark
                        ? {
                            background: themeVariables.dark.inputBackground,
                            color: themeVariables.dark.color,
                            border: themeVariables.dark.inputBorder
                        }
                        : undefined
                }}
            />
            <List
                width='90%'
                height={`calc(100% - ${themeVariables.headerHeight + inputHeight + 20}px)`}
            >
                {children}
            </List>
        </ScreenContainer>
    )
}

export type SearchListScreenProps = props
