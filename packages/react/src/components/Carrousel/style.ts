import { styled } from '../../styles'
import { Icon } from '../Icon'

export const Arrow = styled(Icon, {
  variants: {
    disabled: {
      true: {
        color: 'gray.500',
        cursor: 'not-allowed',
      },
      false: {
        color: 'gray.700',
        cursor: 'pointer',
      },
    },
  },
})
