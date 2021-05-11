import React from 'react'

const ServicesTop: React.FC <Params> = (params) => {
  return (
    <div className = 'top'>
      <span>Why choose 1010 Global?</span>
      <h1 className = 'title'>Our Services & Advantages</h1>
      <p>1010 Global is a top-notch online gaming content provider in Asia. We are the first to carry out development on 5 major types of online gambling with unique games in our hand and these are Cockfighting, Fishfighting and Spiderfighting.</p>
    </div>
  )
}

interface Params {}

export default ServicesTop
