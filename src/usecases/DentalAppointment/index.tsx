import React from 'react'

import { DentalAppointmentProps as props } from './dto'
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
