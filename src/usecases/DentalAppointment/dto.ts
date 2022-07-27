export interface Dentists {
    name: string
    id: string
    next: string
}

export interface DentistAgenda {
    free: Array<{
        start: string
        end: string
    }>
    duration: number
}

export interface Patients {
    firstName: string
    lastName: string
    id: string
    fileId: string
    last: string
}

export interface DentalAppointmentProps {
    getDentists: (search?: string) => Promise<Array<Dentists>>
    getDentistAgenda: (id: string, start: string, end: string) => Promise<DentistAgenda>
    getPatients: (id: string) => Promise<Array<Patients>>
    theme?: 'light' | 'dark'
    themeVariables: {
        light: {
            backgroundOne: string
            backgroundTwo: string
            one: string
            two: string
            textOne: string
            textTwo: string
            textThree: string
            textFour: string
        },
        dark?: {
            backgroundOne: string
            backgroundTwo: string
            one: string
            two: string
            textOne: string
            textTwo: string
            textThree: string
            textFour: string
        }
        headerHeight: number
        headerFontSize: number
        fontSize: number
    }
}

export type DentalAppointmentProviderProps = DentalAppointmentProps & {
    loading: boolean
    setLoading: (b: boolean) => void
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
