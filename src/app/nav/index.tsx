import React from 'react'
import { Link } from 'react-scroll'

import Logo from '../../assets/images/logo.png'

const Navigation: React.FC <Params> = (params) => {

  const items: Array <Props> = [
    {
      text: 'Home',
      to: 'home'
    },
    {
      text: 'Games',
      to: 'games'
    },
    {
      text: 'News',
      to: 'news'
    },
    {
      text: 'Services',
      to: 'services'
    },
    {
      text: 'About Us',
      to: 'aboutUs'
    },
    {
      text: 'Contact Us',
      to: 'contactUs'
    },
  ]

  return (
    <nav>
      <div className = 'brand'>
        <img src = { Logo } alt = '1010 Global Ventures Inc.' />
      </div>
      <ul>
        {
          items.map ((item: Props, i: number) => {
            return <li key = { i }>
              <Link
                activeClass = 'active'
                to = { item.to }>{ item.text }</Link>
            </li>
          })
        }
      </ul>
    </nav>
  )
}

interface Props {
  text: string
  to: string
}

interface Params {}

export default Navigation
