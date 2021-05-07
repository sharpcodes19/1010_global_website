import React from 'react'

const NavigationLogo: React.FC <Params> = (params) => {
  return (
    <div className = 'nav--logo'>
      {
        params.source ?
          <img src = { params.source } alt = '1010 Global' /> :
          <span>1010 Global</span>
      }
    </div>
  )
}

interface Params {
  source?: string
}

export default NavigationLogo
