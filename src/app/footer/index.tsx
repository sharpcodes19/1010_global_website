import React from 'react'
import FooterBottom from './bot'
import FooterTop from './top'

const Footer: React.FC <Params> = (params) => {
  return (
    <footer>
      <FooterTop />
      <FooterBottom />
    </footer>
  )
}

interface Params {}

export default Footer
