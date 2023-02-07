import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import React from 'react'
import { CarrouselContainer, Arrow } from './style'

export interface CarrouselProps {
  children: React.ReactNode[]
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
  const newChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return (
        <div key={child.key} className="keen-slider__slide">
          {child}
        </div>
      )
    }
    return child
  })
  return (
    <CarrouselContainer>
      <div ref={sliderRef} className="keen-slider">
        {newChildren}
      </div>

      <>
        <Arrow
          name="arrowLeft"
          direction="left"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
          disabled={currentSlide === 0}
        />

        <Arrow
          name="arrowRight"
          direction="right"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
          disabled={
            instanceRef.current &&
            currentSlide ===
              instanceRef.current?.track?.details?.slides?.length - 1
          }
        />
      </>
    </CarrouselContainer>
  )
}
