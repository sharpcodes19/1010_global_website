import React from 'react'
import NavigationLink, { NavigationLinkProps } from './links'
import NavigationLogo from './logo'

const Navigation: React.FC <Params> = (params) => {

  const links: Array <NavigationLinkProps> = [
    { name: 'Games', to: '/' },
    { name: 'News', to: '/' },
    { name: 'Services', to: '/' },
    { name: 'About Us', to: '/' },
    { name: 'Contact Us', to: '/' }
  ]
  const [active, setActive] = React.useState <number> (0)

  const onChangeActiveLink = (newActiveIndex: number): void => setActive (newActiveIndex)

  return (
    <div className = 'nav'>
      <NavigationLogo />
      <NavigationLink
        active = { active }
        items = { links }
        onChange = { onChangeActiveLink }
      />
    </div>
  )
}

interface Params {}

export default Navigation
