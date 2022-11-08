// Button.stories.ts|tsx

import React from 'react'

import { Card } from './Card'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Card',
  component: Card,
}

export const Cardies = () => <Card shadow>Hei</Card>
