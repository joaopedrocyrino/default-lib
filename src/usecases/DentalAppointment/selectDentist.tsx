import React, { useState, useEffect } from 'react'

import { Card, SelectDentistCard } from '../../components'
import { Screen } from '../../screens'
import { useDentalAppointmentProvider } from './provider'
import { Dentists } from './dto'

const SelectDentist: React.FC = () => {
    const [dentists, setDentists] = useState<Dentists[]>([])

    const {
        theme,
        getDentists,
        setDentistId,
        setScreens,
        themeVariables,
        setLoading,
        // loading
    } = useDentalAppointmentProvider()

    const getData = (search?: string) => {
        setLoading(true)
        getDentists(search)
            .then((d) => { setDentists(d) })
            .catch((e) => { console.log(e) })
            .finally(() => { setLoading(false) })
    }

    const onSearch = (newSearch: string) => {
        getData(newSearch)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <SearchListScreen
            goBack={() => console.log('back')}
            title='Selecione o dentista'
            onSearch={onSearch}
            theme={theme}
            themeVariables={{
                light: {
                    background: themeVariables.light.backgroundOne,
                    color: themeVariables.light.textOne,
                    inputBackground: themeVariables.light.backgroundTwo,
                    inputBorder: themeVariables.light.textTwo
                },
                dark: themeVariables.dark ? {
                    background: themeVariables.dark.backgroundOne,
                    color: themeVariables.dark.textOne,
                    inputBackground: themeVariables.dark.backgroundTwo,
                    inputBorder: themeVariables.dark.textTwo
                } : undefined,
                headerHeight: themeVariables.headerHeight,
                headerFontSize: themeVariables.headerFontSize,
                fontSize: themeVariables.fontSize
            }}
        >
            {dentists.map((d, i) => {
                return (
                    <SelectDentistCard
                        key={i}
                        themeColors={{
                            light: { background: themeVariables.light.backgroundTwo },
                            dark: themeVariables.dark
                                ? { background: themeVariables.dark.backgroundTwo, }
                                : undefined
                        }}
                    />
                )
            })}
        </SearchListScreen>
    )
}

export default SelectDentist
