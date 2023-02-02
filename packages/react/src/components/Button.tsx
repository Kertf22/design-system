import { styled } from '../styles'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  all: 'unset',

  borderRadius: '$sm',
  fontWeight: '$medium',
  fontSize: '$sm',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  padding: '0 $4',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },

    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$ignite500',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$ignite500',
        border: '1px solid $ignite500',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          borderColor: '$gray200',
          color: '$white',
        },
      },
      tertiary: {
        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})
export type ButtonProps = ComponentProps<typeof Button>

Button.displayName = 'Button'
