import React from 'react'
import { Element } from 'react-scroll'
import GamesBottom from './bot'
import GamesMid from './mid'
import GamesTop from './top'
import GamesWoman from './woman'

const Games: React.FC <Params> = (params) => {
  return (
    <Element name = 'games' className = 'games'>
      <GamesTop />
      <GamesWoman />
      <GamesMid />
      <GamesBottom />
    </Element>
  )
}

interface Params {}

export default Games
