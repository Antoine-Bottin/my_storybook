import React from 'react'

import { PasswordInput } from './PasswordInput'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Input/PasswordInput',
    component: PasswordInput,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        borderColor: { control: 'color' },
        inputBackgroundColor: { control: 'color' },
    },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => (
    <PasswordInput
        backgroundColor={args.backgroundColor}
        borderColor={args.borderColor}
        inputBackgroundColor={args.inputBackgroundColor}
    />
)

export const GlowyPasswordInput = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GlowyPasswordInput.args = {
    backgroundColor: 'black',
    borderColor: 'red',
    inputBackgroundColor: '#2b0413',
}
