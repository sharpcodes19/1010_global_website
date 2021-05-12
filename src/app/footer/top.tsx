import React from 'react'
import { RiFacebookBoxFill, RiMailFill, RiYoutubeFill } from 'react-icons/ri'
import { FaViber } from 'react-icons/fa'

const FooterTop: React.FC <Params> = (params) => {
  return (
    <div className = 'top'>
      <ul>
        <li>
          <RiFacebookBoxFill />
          <span>1010 Global</span>
        </li>
        <li>
          <RiMailFill />
          <span>1010mail@gmail.com</span>
        </li>
        <li>
          <FaViber />
          <span>1010CSR</span>
        </li>
        <li>
          <RiYoutubeFill />
          <span>youtuble/1010</span>
        </li>
      </ul>
    </div>
  )
}

interface Params {}

export default FooterTop
