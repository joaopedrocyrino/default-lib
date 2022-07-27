import React, { useState, createContext, useContext } from 'react'

// import { List } from '../../layout'
// import { ScreenContainer } from './style'
import { DentalAppointmentProps as props, DentalAppointmentProviderProps } from './dto'
// import { ScreenHeader, SearchInput } from '../../components'
import SelectDentist from './selectDentist'

const DentalAppointmentContext = createContext({})

export const DentalAppointmentProvider: React.FC<props & { children: any }> = ({ children, ...p}) => {
    const [screens, setScreens] = useState<'selectDentist' | 'selectDate' | 'selectPatient' | 'createPatient'>('selectDentist')
    const [dentistId, setDentistId] = useState<string>('')
    const [patientId, setPatientId] = useState<string>('')
    const [start, setStart] = useState<string>('')
    const [end, setEnd] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <DentalAppointmentContext.Provider
            value={{
                ...p,
                dentistId,
                setDentistId,
                start,
                setStart,
                end,
                setEnd,
                patientId,
                setPatientId,
                screens,
                setScreens,
                loading,
                setLoading
            }}
        >
            {children}
        </DentalAppointmentContext.Provider>
    )
}

export const useDentalAppointmentProvider = (): DentalAppointmentProviderProps => {
    const c = useContext<{ [k:string]: any }>(DentalAppointmentContext)
    return {
        theme: c.theme,
        getDentists: c.getDentists,
        getDentistAgenda: c.getDentistAgenda,
        getPatients: c.getPatients,
        dentistId: c.dentistId,
        setDentistId: c.setDentistId,
        start: c.start,
        setStart: c.setStart,
        end: c.end,
        setEnd: c.setEnd,
        patientId: c.patientId,
        setPatientId: c.setPatientId,
        screens: c.screens,
        setScreens: c.setScreens,
        themeVariables: c.themeVariables,
        loading: c.loading,
        setLoading: c.setLoading
    }
}