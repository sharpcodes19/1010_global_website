import React from 'react'

const NewsTopSection: React.FC <Params> = (params) => {
  return (
    <div className = 'news--top'>
      <h1 className = 'news--top--title'>News</h1>
    </div>
  )
}

interface Params {}

export default NewsTopSection
