import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@bet-kit-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/25166301?v=4',
    alt: 'Avatar',
  },
  argTypes: {
    src: {
      control: { type: 'text' },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: '',
  },
}
