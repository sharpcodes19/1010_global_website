import React from 'react'
import { Element } from 'react-scroll'

import NewsBottom from './bot'
import NewsMid from './mid'
import NewsTop from './top'

const News: React.FC <Params> = (params) => {
  
  return (
    <Element name = 'news' className = 'news'>
      <NewsTop />
      <NewsMid />
      <NewsBottom />
    </Element>
  )
}

interface Params {}

export default News
