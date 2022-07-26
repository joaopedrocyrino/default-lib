import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Screens } from '../../src'

const SearchListScreenComponent = Screens.SearchListScreen
type props = Screens.SearchListScreenProps

const meta: Meta = {
    title: 'Search List Screen',
    component: SearchListScreenComponent,
    argTypes: {},
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story<props> = args =>
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'purple' }}>
        <SearchListScreenComponent {...args} />
    </div>

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const SearchListScreen = Template.bind({});

SearchListScreen.args = {
    children: [].map((item, i) => <div />),
    goBack: () => console.log('back'),
    title: 'Selecione dentista',
    onSearch: (n) => console.log(n),
    themeVariables: {
        light: {
            background: '#F7F7F7',
            color: 'black',
            inputBackground: 'white',
            inputBorder: '#DEDEDE'
        },
        headerHeight: 50,
        headerFontSize: 18,
        fontSize: 15
    }
};
