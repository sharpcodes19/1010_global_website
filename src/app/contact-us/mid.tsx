import React from 'react'

const ContactUsMid: React.FC <Params> = (params) => {
  return (
    <div className = 'mid'>
      <button className = 'btn' type = 'button'>
        <span>Contact Us</span>
      </button>
    </div>
  )
}

interface Params {}

export default ContactUsMid
