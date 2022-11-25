import React from 'react'
import { BeforeAfterSlider } from './BeforeAfterSlider'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Slider/BeforeAfterSlider',
    component: BeforeAfterSlider,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        borderColor: { control: 'color' },
        inputBackgroundColor: { control: 'color' },
    },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => <BeforeAfterSlider />

export const BeforeAfterSliderTest = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BeforeAfterSliderTest.args = {
    backgroundColor: 'black',
    borderColor: 'red',
    inputBackgroundColor: '#2b0413',
}
