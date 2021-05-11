import React from 'react'
import { Element } from 'react-scroll'
import ServicesMid from './mid'
import ServicesTop from './top'

const Services: React.FC <Params> = () => {
  return (
    <Element className = 'services' name = 'services'>
      
      <ServicesTop />
      <ServicesMid />

    </Element>
  )
}

interface Params {}

export default Services
