import React from 'react'

// import { List } from '../../layout'
// import { ScreenContainer } from './style'
import { DentalAppointmentProps as props } from './dto'
// import { ScreenHeader, SearchInput } from '../../components'
import { DentalAppointmentProvider, useDentalAppointmentProvider } from './provider'
import SelectDentist from './selectDentist'

const Screens: React.FC = () => {
    const { screens } = useDentalAppointmentProvider()

    return (
        <>
            {screens === 'selectDentist' && <SelectDentist />}
        </>
    )
}

export const DentalAppointment: React.FC<props> = (props) => {
    return (
        <DentalAppointmentProvider {...props}>
            <Screens />
        </DentalAppointmentProvider>
    )
}

export type DentalAppointmentProps = props
