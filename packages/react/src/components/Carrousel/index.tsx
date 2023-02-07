import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import React, { ReactElement } from 'react'
import { Arrow } from './style'

export interface CarrouselProps {
  children: React.ReactNode
  perView?: number | 'auto'
  spacing?: number
}

export function Carrousel({
  children,
  perView = 'auto',
  spacing = 12,
}: CarrouselProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    slides: {
      perView,
      spacing,
    },
  })
  // Add a className to every child

  const childrenWithClassName = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as ReactElement, {
        className: 'keen-slider__slide',
      })
    }
    return child
  })

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {childrenWithClassName}
      </div>
      {instanceRef.current && (
        <>
          <Arrow
            name="arrowLeft"
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <Arrow
            name="arrowRight"
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </>
  )
}
