import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Element } from 'react-scroll'

import Slide_1 from '../../assets/images/slides/1.jpg'

const HomePage: React.FC <Params> = (params) => {

  const items = [
    <img src = { Slide_1 } alt = '' />,
  ];
  
  return (
    <Element name = 'home' className = 'home'>
      <AliceCarousel
        disableButtonsControls
        disableDotsControls
        items = { items } />
    </Element>
  )
}
interface Params {}

export default HomePage
