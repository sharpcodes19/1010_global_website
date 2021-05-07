import React from 'react'

import Navigation from './components/nav'
import Slide1 from '../assets/images/slides/1.jpg'
import Slider from './components/slider'
import GameSection from './sections/game'
import NewsSection from './sections/news'

const App: React.FC <Params> = (params) => {

  const sliderImages: Array <any> = [ Slide1, Slide1 ]

  return (
    <>
      <Navigation />
      <Slider sources = { sliderImages } />
      <main>
        <GameSection />
        <NewsSection />
      </main>
    </>
  )
}

interface Params {}

export default App
