import React from 'react'

export interface TickerProps {
  /** The children to attach the ticker to */
  children: React.ReactNode

  /** Period in milliseconds to trigger re-renderings. If 'undefined' clears existing interval and doesn't set new one. */
  every?: number

  /** Callback to fire on every tick */
  onTick?: (tick: number) => void
}

export function Ticker({ children, every, onTick }: TickerProps) {
  const [tick, setTick] = React.useState(0)

  React.useEffect(() => {
    let intervalId: number | undefined
    if (every) {
      intervalId = window.setInterval(() => {
        setTick((tick) => tick + 1)
        onTick && onTick(tick)
      }, every)
    }
    return () => {
      if (intervalId) {
        window.clearInterval(intervalId)
      }
    }
  }, [every, onTick, tick])

  if (!children) {
    return null
  }

  return <>{children}</>
}
