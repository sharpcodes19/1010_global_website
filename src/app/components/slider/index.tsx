import React from 'react'
import AliceCarousel from 'react-alice-carousel'

const Slider: React.FC <Params> = (params) => {
  return (
    <div className = 'slider'>
      <AliceCarousel disableButtonsControls disableDotsControls autoPlay>
        {
          params.sources.map ((src: string, i: number) => {
            return <img alt = '' src = { src } key = { i } className = 'slider--img' />
          })
        }
      </AliceCarousel>
    </div>
  )
}

interface Params {
  sources: Array <string>
}

export default Slider
