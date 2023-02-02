import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@bet-kit-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testing Box Element</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: { type: null },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
