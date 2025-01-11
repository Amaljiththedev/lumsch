import React from 'react'
import EmblaCarousel from './Carsousel'
import { EmblaOptionsType } from 'embla-carousel'
const OPTIONS: EmblaOptionsType = { dragFree: true }
const SLIDE_COUNT = 16
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
function Accumulation() {
  return (
    <div>
    <div className="flex justify-center items-center w-full overflow-hidden">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
    </div>
  )
}

export default Accumulation