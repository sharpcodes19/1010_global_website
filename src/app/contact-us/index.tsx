import React from 'react'
import ContactUsMid from './mid'
import ContactUsTop from './top'

const ContactUs: React.FC <Params> = (params) => {
  return (
    <div className = 'contact-us'>
      <ContactUsTop />
      <ContactUsMid />
    </div>
  )
}

interface Params {}

export default ContactUs
