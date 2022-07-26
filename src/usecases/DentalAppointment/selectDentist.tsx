import React, { useState } from 'react'

// import { List } from '../../layout'
// import { ScreenContainer } from './style'
// import { ScreenHeader, SearchInput } from '../../components'
import { SearchListScreen } from '../../screens'
import { useDentalAppointmentProvider } from './provider'

const SelectDentist: React.FC = () => {
    const { theme, getDentists, dentistId, setDentistId, setScreens } = useDentalAppointmentProvider()

    const onSearch = async () => {

    }

    return (
        <SearchListScreen
            goBack={() => console.log('back')}
            title='Selecione o dentista'
            onSearch={}
        >
        </SearchListScreen>
    )
}

export default SelectDentist
