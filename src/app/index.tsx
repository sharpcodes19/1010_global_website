import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import AboutUs from './about-us'
import ContactUs from './contact-us'
import Footer from './footer'
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
      />
      <Navigation />
      <HomePage />
      <Games />
      <Services />
      <News />
      <AboutUs />
      <ContactUs />
      <Footer />
    </HelmetProvider>
  )
}

interface Params {}

export default App
