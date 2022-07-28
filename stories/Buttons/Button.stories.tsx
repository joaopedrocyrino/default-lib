import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from '../../src/components'

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    theme: {
      control: 'select',
      options: ['light', 'dark']
    },
    ['themeColor.dark.backgroundColor']: { control: { type: 'color'}},
    ['themeColor.dark.color']: { control: { type: 'color'}},
    ['themeColor.dark.borderColor']: { control: { type: 'color'}},
    ['themeColor.light.backgroundColor']: { control: { type: 'color'}},
    ['themeColor.light.color']: { control: { type: 'color'}},
    ['themeColor.light.borderColor']: { control: { type: 'color'}},
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const DefaultLightButton = Template.bind({});

DefaultLightButton.args = {
  children: 'Default Text',
  theme: 'light',
  themeColor: {
    light: {
      backgroundColor: '#084594',
      color: '#FFF',
      borderColor: '#084594',
    }
  },
};
