import { icons } from '@bet-kit-ui/tokens'
import { styled } from '../../styles'

const name = {} as any
Object.keys(icons).forEach((key) => {
  name[key] = {
    '&:before': {
      content: `\'${icons[key as keyof typeof icons]}'`,
    },
  }
})

export const IconSVG = styled('i', {
  display: 'inline-block',
  height: '100%',
  width: '100%',

  lineHeight: 1,
  speak: 'none',

  variants: {
    name,
    size: {
      sm: {
        width: '$4',
        height: '$4',
        '&:before': {
          fontSize: '$xs',
        },
      },

      md: {
        width: '$6',
        height: '$6',
        '&:before': {
          fontSize: '$sm',
        },
      },

      lg: {
        width: '$8',
        height: '$8',
        '&:before': {
          fontSize: '$md',
        },
      },
    },
  },

  '&:before': {
    fontFamily: 'tbicons!important',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontVariant: 'normal',
    textTransform: 'none',
  },

  defaultVariants: {
    size: 'md',
  },
})
