import React from 'react'

import Text from './Text'

export default {
    component: Text,
}

const Template = (args) => <Text {...args} />
export const Default = Template.bind({})
Default.args = {
    textType: 'title',
    children: 'This is a text',
    className: '', //Tailwind classes here
}
