import React from 'react'
import { Link } from 'react-scroll'

const NavigationLink: React.FC <Params> = (params) => {
  return (
    <div className = 'nav--links'>
      <ul className = 'nav--links--list'>
        {
          params.items.map (({ to, name }: NavigationLinkProps, i: number) => {
            return <li key = { i } className = 'nav--links--item'>
              <Link
                onClick = { (): void => params.onChange (i) }
                className = { `nav--links--link ${ params.active === i ? 'active' : '' }`.trim () } to = { to }>
                { name }
              </Link>
            </li>
          })
        }
      </ul>
    </div>
  )
}

interface Params {
  items: Array <NavigationLinkProps>
  active: number
  onChange: (newActiveIndex: number) => void
}

export interface NavigationLinkProps {
  name: string
  to: string
}

export default NavigationLink
