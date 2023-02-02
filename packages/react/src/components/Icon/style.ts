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

export const IconContainer = styled('div', {
  variants: {
    size: {
      sm: {
        width: '$4',
        height: '$4',
      },

      md: {
        width: '$6',
        height: '$6',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const IconSVG = styled('i', {
  display: 'inline-block',
  height: '100%',
  width: '100%',

  lineHeight: 1,
  speak: 'none',

  variants: {
    name,
  },

  '&:before': {
    fontFamily: 'tbicons!important',
    fontSize: '$4',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontVariant: 'normal',
    textTransform: 'none',
    display: 'inline-block',
  },
})
