// Button.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import ApplicationTable from './ApplicationTable'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ApplicationTable',
  component: ApplicationTable,
} as ComponentMeta<typeof ApplicationTable>

const Template: ComponentStory<typeof ApplicationTable> = (args) => (
  <ApplicationTable {...args} />
)

export const Default = Template.bind({})
Default.args = {
  headings: ['medlem', 'Anledning', 'money', 'Status', 'Ansvarlig', ''],
  rows: [
    {
      occasion: 'string',
      name: 'string',
      amount: 1337,
      amountUnit: 'NOK',
      status: 'string',
      responsible_committee: 'string',
    },
  ],
}
