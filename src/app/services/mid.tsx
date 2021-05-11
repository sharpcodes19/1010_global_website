import React from 'react'

import LaptopSVG from '../../assets/svg/Laptop SVG.svg'
import TechSupportSVG from '../../assets/svg/Tech Support SVG.svg'
import ManagementSVG from '../../assets/svg/Mnagement SVG.svg'

const ServicesMid: React.FC <Params> = (params) => {

  const cards: Array <Props> = [
    {
      source: LaptopSVG,
      text: 'Unique Games that has never been showed to others.'
    },
    {
      source: TechSupportSVG,
      text: '24/7 Technical Support. 1010 Guarantees our clients\' reliable and trustable API integration services in order to ensure stable gaming experience and solving problems instantly for our players.'
    },
    {
      source: ManagementSVG,
      text: 'Tracking Management for every player to know their history transactions, betting history, and request transaction.'
    },
  ]
  
  return (
    <div className = 'mid'>
      <ul>
        {
          cards.map ((card: Props, i: number) => {
            return <li key = { i }>
              <img src = { card.source } alt = '' />
              <p>{ card.text }</p>
            </li>
          })
        }
      </ul>
    </div>
  )
}

interface Props {
  source: string
  text: string
}

interface Params {}

export default ServicesMid
