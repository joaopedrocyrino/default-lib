export interface DentalAppointmentProps {
    getDentists: (search: string) => Promise<Array<{
        name: string
        id: string
        next: string
    }>>
    getDentistAgenda: (
        id: string,
        start: string,
        end: string
    ) => Promise<{
        free: Array<{
            start: string
            end: string
        }>
        duration: number
    }>
    getPatients: (id: string) => Promise<Array<{
        firstName: string
        lastName: string
        id: string
        fileId: string
        last: string
    }>>
    theme: 'light' | 'dark'

}

export type DentalAppointmentProviderProps = DentalAppointmentProps & {
    dentistId: string
    setDentistId: (id: string) => void
    start: string
    setStart: (id: string) => void
    end: string
    setEnd: (id: string) => void
    patientId: string
    setPatientId: (id: string) => void
    screens: 'selectDentist' | 'selectDate' | 'selectPatient' | 'createPatient'
    setScreens: (screen: 'selectDentist' | 'selectDate' | 'selectPatient' | 'createPatient') => void
}
