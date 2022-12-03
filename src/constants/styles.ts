import { background, border, colorPallete, text } from "../dto/styles"

export const boxShaddow = [
    'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset',
    'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
    'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
    'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
    'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
    'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
    'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'
]

export const screenHeaderHeight = 50

export const colors: {
    colorPalletes: { [k: string]: colorPallete }
    background: background
    text: text
    border: border
} = {
    background: [
        { dark: '#0F172A', light: '#F7F7F7' },
        { dark: '#1E293B', light: '#EBF1F9' },
        { dark: '#374151', light: '#FFFFFF' },
        { dark: '#9BA0A8', light: '#DDDDDD' },
        { dark: '#E2E8F0', light: '#FFFFFF' },
        { dark: '#E0EDFD', light: '#E0EDFD' },
    ],
    text: [
        { dark: '#FFFFFF', light: '#272C32' },
        { dark: '#E2E8F0', light: '#272C32' },
        { dark: '#9CA3AF', light: '#AAAAAA' },
        { dark: '#576774', light: '#576774' },
        { dark: '#CED1D7', light: '#AAAAAA' },
        { dark: '#272C32', light: '#272C32' },
    ],
    border: [
        { dark: '#4B5563', light: '#DEDEDE' }
    ],
    colorPalletes: {
        1: ['#5300e8', '#6002ee', '#7e3ff2', '#9965f4', '#b794f6', '#d4bff9'],
        2: ['#61d800', '#75e900', '#90ee02', '#aaf255', '#c6f68d', '#defabb'],
        3: ['#039BE5', '#03A9F4', '#29B6F6', '#4FC3F7', '#81D4FA', '#B3E5FC'],
        4: ['#ba00e5', '#cd00ea', '#d602ee', '#df55f2', '#e98df5', '#f2bcf8'],
        5: ['#084594', '#134E99', '#134E99', '#1E569E', '#6D95C9', '#D1E4FD']
    }
}