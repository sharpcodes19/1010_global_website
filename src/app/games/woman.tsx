import React from 'react'
import Woman from '../../assets/images/g1.png'

const GamesWoman: React.FC <Params> = (params) => {
  return (
    <div className = 'woman'>
      <img src = { Woman } alt = '' />
    </div>
  )
}

interface Params {}

export default GamesWoman
