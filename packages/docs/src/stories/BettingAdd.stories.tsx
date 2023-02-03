import type { Meta, StoryObj } from '@storybook/react'
import { BettingAdd, BettingAddProps } from '@bet-kit-ui/react'
export default {
  title: 'Betting/ Betting Add',
  component: BettingAdd,

  args: {
    price: 20.1,
  },
  argTypes: {
    price: {},
    onClick: { action: 'clicked' },
  },
} as Meta<BettingAddProps>

export const Primary: StoryObj<BettingAddProps> = {}
