import React from 'react'

import { PasswordInput } from './PasswordInput'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'PasswordInput',
    component: PasswordInput,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PasswordInput />

export const Yoo = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Yoo.args = {
    primary: true,
    label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
    size: 'large',
    label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
    size: 'small',
    label: 'Button',
}
