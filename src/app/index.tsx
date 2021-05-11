import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import Logo from '../assets/images/logo.png'
import AboutUs from './about-us'
import Games from './games'
import HomePage from './home'
import Navigation from './nav'
import News from './news'
import Services from './services'

const App: React.FC <Params> = (params) => {
  return (
    <HelmetProvider>
      <Helmet
        title = '1010 Global Ventures Inc.'
        link = {[
          {
            rel: 'icon',
            type: 'image/png',
            href: Logo
          }
        ]}
      />
      <Navigation />
      <HomePage />
      <Services />
      <Games />
      <News />
      <AboutUs />
    </HelmetProvider>
  )
}

interface Params {}

export default App
