import React from 'react'
import Woman from '../../assets/images/g2.png'

const AboutUsWoman: React.FC <Params> = (params) => {
  return (
    <div className = 'woman'>
      <img src = { Woman } alt = '' />
    </div>
  )
}

interface Params {}

export default AboutUsWoman
