import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Usecases } from '../../../src'

const DentalAppointmentComponent = Usecases.DentalAppointment
type props = Usecases.DentalAppointmentProps

const meta: Meta = {
    title: 'USECASES/dental/Dental Appointment',
    component: DentalAppointmentComponent,
    argTypes: {},
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story<props> = args =>
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'purple' }}>
        <DentalAppointmentComponent {...args} />
    </div>

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const DentalAppointment = Template.bind({});

DentalAppointment.args = {
    getDentists: async (search?: string) => {
        const d = [
            { name: 'joao', id: 'qwqw', next: '26/7/2022' },
            { name: 'vinicius', id: 'sfsd', next: '29/7/2022' },
            { name: 'henrique', id: 'dfsdf', next: '29/7/2022' },
            { name: 'felipe', id: 'dfgsd', next: '26/7/2022' },
            { name: 'pedro', id: 'dgkha', next: '27/7/2022' },
            { name: 'arthur', id: 'asfn', next: '30/7/2022' },
            { name: 'bernanrdo', id: 'sdfsdfsd', next: '26/7/2022' },
            { name: 'joao', id: 'dfhdaa', next: '28/7/2022' },
        ]

        if (search) {
            return d.filter(i => i.name === search || i.id === search)
        }

        return d
    },
    getDentistAgenda: async () => {
        return {
            free: [],
            duration: 0
        }
        
    },
    getPatients: async () => [],
    themeVariables: {
        light: {
            backgroundOne: '#F7F7F7',
            backgroundTwo: '#ffffff',
            one: '#084594',
            two: '#EBF1F9',
            textOne: '#272C32',
            textTwo: '#AAAAAA',
            textThree: '#8D8D8D',
            textFour: '#ffffff',
        },
        headerHeight: 50,
        headerFontSize: 18,
        fontSize: 16
    }
};
