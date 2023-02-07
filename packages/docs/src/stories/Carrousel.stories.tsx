import type { Meta, StoryObj } from '@storybook/react'
import { Box, Carrousel, CarrouselProps } from '@bet-kit-ui/react'

export default {
  title: 'Data Display/Carrousel',
  component: Carrousel,
  args: {
    children: (
      <>
        {Array.from({ length: 10 }).map((_, index) => (
          <Box key={index}>
            <img src={`https://picsum.photos/seed/${index}/200/300`} />
          </Box>
        ))}
      </>
    ),
    perView: 'auto',
    spacing: 12,
  },
  argTypes: {
    perView: {
      control: {
        type: 'number',
        min: 1,
      },
    },
    spacing: {
      control: {
        type: 'number',
        min: 0,
      },
    },
    children: {},
  },
} as Meta<CarrouselProps>

export const Primary: StoryObj<CarrouselProps> = {}
