import { ComponentProps, useEffect, useState } from 'react'
import { BettingAddContainer, PriceIcon } from './style'
import { Text } from '../Text'

export interface BettingAddProps
  extends ComponentProps<typeof BettingAddContainer> {
  price: number
}

export function BettingAdd({ price, ...props }: BettingAddProps) {
  const [lastPrice, setLastPrice] = useState(0)
  const [selectedIcon, setSelectedIcon] = useState<
    'arrowUp' | 'arrowDown' | ''
  >('arrowUp')

  useEffect(() => {
    if (lastPrice > price) {
      setSelectedIcon('arrowDown')
    } else if (lastPrice < price) {
      setSelectedIcon('arrowUp')
    } else {
      setSelectedIcon('')
    }
    setLastPrice(price)
  }, [lastPrice])

  return (
    <BettingAddContainer {...props}>
      {selectedIcon && <PriceIcon name={selectedIcon} size="sm" />}

      <Text size={'xs'}>{price}</Text>
    </BettingAddContainer>
  )
}
