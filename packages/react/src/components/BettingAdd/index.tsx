import { ComponentProps, useEffect, useState } from 'react'
import { BettingAddContainer, PriceDown, PriceUp } from './style'
import { Text } from '../Text'

export interface BettingAddProps
  extends ComponentProps<typeof BettingAddContainer> {
  price: number
}

export function BettingAdd({ price, ...props }: BettingAddProps) {
  // const []

  //   // Compare last price and if it's higher than the current price, then add a class to the container
  const [lastPrice, setLastPrice] = useState(0)
  const [showingIcon, setShowingIcon] = useState(<></>)

  useEffect(() => {
    if (lastPrice > price) {
      setShowingIcon(<PriceDown name="arrowDown" />)
    } else if (lastPrice < price) {
      setShowingIcon(<PriceUp name="arrowUp" />)
    } else {
      setShowingIcon(<></>)
    }
    setLastPrice(price)
  }, [lastPrice, price])

  return (
    <BettingAddContainer {...props}>
      {showingIcon}
      <Text size={'xs'}>{price}</Text>
    </BettingAddContainer>
  )
}
