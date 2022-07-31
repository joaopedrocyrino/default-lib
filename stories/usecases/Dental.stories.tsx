import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Usecases, Screens } from '../../src'

const App = Usecases.Dental
type props = Usecases.AppProps

const { Login } = Screens

const meta: Meta = {
    title: 'usecases/App',
    component: App,
    argTypes: {},
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story<props> = args =>
    <div style={{ width: '100vw', height: '100vh', }}>
        <App
            onLogin={async () => {
                return await new Promise((res) => {
                    setTimeout(() => {
                        res('token')
                    }, 4000)
                })
            }}
        />
    </div>

export const AppUsecase = Template.bind({});

AppUsecase.args = {
};
