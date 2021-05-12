import React from 'react'
import { Element } from 'react-scroll'
import AboutUsMid from './mid'
import AboutUsTop from './top'
import AboutUsWoman from './woman'

const AboutUs: React.FC <Params> = (params) => {
  return (
    <Element className = 'about-us' name = 'aboutUs'>
      <AboutUsTop />
      <AboutUsMid />
      <AboutUsWoman />
    </Element>
  )
}

interface Params {}

export default AboutUs
