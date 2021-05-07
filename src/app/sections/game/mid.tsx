import React from 'react'

import Image from '../../../assets/images/g1.png'
import SlotMachine from '../../../assets/svg/Slot Machine.svg'
import Poker from '../../../assets/svg/Poker.svg'
import Roulette from '../../../assets/svg/Roulette.svg'
import DiceGame from '../../../assets/svg/Dice game.svg'
import CockFighting from '../../../assets/svg/Sabong.svg'
import WheelOfFortune from '../../../assets/svg/Wheel of Fortune.svg'
import SpiderFight from '../../../assets/svg/Spiderfight.svg'
import FishFight from '../../../assets/svg/fish.svg'

const GameMiddleSection: React.FC <Params> = (params) => {

  const items: Array <Props> = [
    { source: SlotMachine, title: 'Slot Machine' },
    { source: Poker, title: 'Poker' },
    { source: Roulette, title: 'Roulette' },
    { source: DiceGame, title: 'Dice Game' },
    { source: CockFighting, title: 'Cock Fighting' },
    { source: WheelOfFortune, title: 'Wheel of Fortune' },
    { source: SpiderFight, title: 'Spider Fighting' },
    { source: FishFight, title: 'Fish Fighting' }
  ]

  return (
    <div className = 'game--mid'>
      <div className = 'game--mid--content'>
        <img src = { Image } alt = '' className = 'game--mid--content--img' />
        <div className = 'game--mid--content--data'>
          <h1 className = 'game--mid--content--data--title'>What we have here</h1>
          <ul className = 'game--mid--content--data--list'>
            {
              items.map (({ source, title }: Props, i: number) => {
                return <li key = { i } className = 'game--mid--content--data--list--item'>
                  <img src = { source } alt = '' />
                  <span className = 'game--mid--content--data--list--item--text'>{ title }</span>
                </li>
              })
            }
          </ul>
        </div>
      </div>
      
    </div>
  )
}

interface Params {}

interface Props {
  source: string
  title: string
}

export default GameMiddleSection
