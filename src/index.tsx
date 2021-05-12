import React from 'react'
import ReactDOM from 'react-dom'
import { IconContext } from 'react-icons'

import App from './app'

import 'react-alice-carousel/lib/alice-carousel.css'
import './styles/css/index.min.css'


ReactDOM.render (
  <React.StrictMode>
    <IconContext.Provider value = {{ className: 'icon' }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
