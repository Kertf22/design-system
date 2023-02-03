import { styled } from '../../styles'
import { Icon } from '../Icon'

export const BettingAddContainer = styled('div', {
  width: 52,
  height: 32,

  borderRadius: '$xs',
  backgroundColor: '$gray100',
  color: '$black',

  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    backgroundColor: '$gray200',
  },

  cursor: 'pointer',
})

export const PriceIcon = styled(Icon, {
  position: 'absolute',
  variant: {
    up: {
      color: '$green300',
      top: -10,
    },
    down: {
      color: '$red300',
      top: 48,
    },
  },
})
