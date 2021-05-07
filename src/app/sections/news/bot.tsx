import React from 'react'

const NewsBottomSection: React.FC <Params> = (params) => {
  return (
    <div className = 'news--bot'>
      <button className = 'news--bot--more'>
        <span>See more</span>
      </button>
    </div>
  )
}

interface Params {}

export default NewsBottomSection
