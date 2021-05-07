import React from 'react'
import GameMiddleSection from './mid'

const GameSection: React.FC <Params> = (params) => {
  return (
    <section className = 'game'>
      <div className = 'game--wrapper'>
        <GameMiddleSection />
      </div>
    </section>
  )
}

interface Params {}

export default GameSection
