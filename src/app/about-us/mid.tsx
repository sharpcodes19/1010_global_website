import React from 'react'

const AboutUsMid: React.FC <Params> = (params) => {
  return (
    <div className = 'mid'>
      <ul>
        <li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusamus, et tenetur, commodi harum ducimus adipisci ipsa minus quod rerum, blanditiis vel neque ullam ex eum est esse animi ut?</p>
        </li>
        <li>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, culpa beatae?</p>
        </li>
        <li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi, possimus suscipit cumque accusantium voluptatum, ipsa ipsam nihil eaque natus quas perspiciatis beatae libero.</p>
        </li>
      </ul>
    </div>
  )
}

interface Params {}

export default AboutUsMid
