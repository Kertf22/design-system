import type { Meta, StoryObj } from '@storybook/react'
import { Icon, IconProps } from '@bet-kit-ui/react'
import { icons } from '@bet-kit-ui/tokens'

export default {
  title: 'Data Display/Icons',
  component: Icon,
  args: {
    name: 'add',
  },
  argTypes: {
    name: {
      options: Object.keys(icons),
      control: { type: 'select' },
    },
  },
} as Meta<IconProps>

export const Primary: StoryObj<IconProps> = {}
