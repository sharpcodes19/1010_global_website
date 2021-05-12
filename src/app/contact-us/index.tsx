import React from 'react'
import { Element } from 'react-scroll'
import ContactUsMid from './mid'
import ContactUsTop from './top'

const ContactUs: React.FC <Params> = (params) => {
  return (
    <Element className = 'contact-us' name = 'contactUs'>
      <ContactUsTop />
      <ContactUsMid />
    </Element>
  )
}

interface Params {}

export default ContactUs
