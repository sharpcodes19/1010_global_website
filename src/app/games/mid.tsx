import React from 'react'

import SlotMachine from '../../assets/svg/Slot Machine.svg'
import Poker from '../../assets/svg/Poker.svg'
import Roulette from '../../assets/svg/Roulette.svg'
import DiceGames from '../../assets/svg/Dice game.svg'
import Cockfighting from '../../assets/svg/Sabong.svg'
import WheelOfFortune from '../../assets/svg/Wheel of Fortune.svg'
import SpiderFighting from '../../assets/svg/Spiderfight.svg'
import FishFighting from '../../assets/svg/fish.svg'

const GamesMid: React.FC <Params> = (params) => {

  const items: Array <Props> = [
    { source: SlotMachine, text: 'Slot Machine' },
    { source: Poker, text: 'Poker' },
    { source: Roulette, text: 'Roulette' },
    { source: DiceGames, text: 'Dice Games' },
    { source: Cockfighting, text: 'Cockfighting' },
    { source: WheelOfFortune, text: 'Wheel Of Fortune' },
    { source: SpiderFighting, text: 'Spider Fighting' },
    { source: FishFighting, text: 'Fish Fighting' },
  ]

  return (
    <div className = 'mid'>
      <ul>
        {
          items.map ((item: Props, i: number) => {
            return <li key = { i }>
              <img src = { item.source } alt = { item.text } />
              <span>{ item.text }</span>
            </li>
          })
        }
      </ul>
    </div>
  )
}

interface Props {
  source: any
  text: string
}

interface Params {}

export default GamesMid
