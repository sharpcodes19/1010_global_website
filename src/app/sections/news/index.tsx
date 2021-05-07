import React from 'react'
import NewsBottomSection from './bot'
import NewsMiddleSection from './mid'
import NewsTopSection from './top'

const NewsSection: React.FC <Params> = (params) => {
  return (
    <section className = 'news'>
      <div className = 'news--wrapper'>
        <NewsTopSection />
        <NewsMiddleSection />
        <NewsBottomSection />
      </div>
    </section>
  )
}

interface Params {}

export default NewsSection
