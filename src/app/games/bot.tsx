import React from 'react'

const GamesBottom: React.FC <Params> = (params) => {
  return (
    <div className = 'bot'>
      <p>We offer customized gaming platform to tailor fit our solution based on our client's business process.</p>
      <p>Our solution is initially composed essential software modules such as:</p>
      <ul>
        <li>
          <span>Account Module</span>
          <p>Used in player's registration and authentication</p>
        </li>
        <li>
          <span>Wallet Module</span>
          <p>Used in player's balance management</p>
        </li>
        <li>
          <span>Reporting Module</span>
          <p>Used in profit reporting and auditing</p>
        </li>
        <li>
          <span>Game Wallet Integration Module</span>
          <p>Used to integrate third-party games to the betting platform</p>
        </li>
        <li>
          <span>Live Cockfighting Betting Console</span>
          <p>Used by players to place bet</p>
        </li>
        <li>
          <span>Live Cockfighting Video Feed</span>
          <p>This is used to display multi channel live cockfighting video</p>
        </li>
      </ul>
      <p>We also provide custom module development to extent the based features of the betting platform.</p>
    </div>
  )
}

interface Params {}

export default GamesBottom
