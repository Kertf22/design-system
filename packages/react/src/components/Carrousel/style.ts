import { styled } from '../../styles'
import { Icon } from '../Icon'

export const CarrouselContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
})

export const Arrow = styled(Icon, {
  position: 'absolute',
  zIndex: 1,

  variants: {
    direction: {
      left: {
        left: 0,
        top: '50%',
      },
      right: {
        right: 0,
        top: '50%',
      },
    },

    disabled: {
      true: {
        cursor: 'not-allowed',
        color: '$gray700',
        opacity: 0.5,
      },
      false: {
        color: '$gray100',
        cursor: 'pointer',
        opacity: 1,
      },
    },
  },
})
