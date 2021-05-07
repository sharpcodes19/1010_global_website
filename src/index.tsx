import React from 'react'
// import ReactDOM from 'react-dom'
import { IconContext } from 'react-icons'
import { render } from 'react-snapshot'

import App from './app'
import reportWebVitals from './reportWebVitals'

import 'react-alice-carousel/lib/alice-carousel.css'
import './styles/css/index.min.css'


render(
  <React.StrictMode>
    <IconContext.Provider value = {{ className: 'icon' }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals ()
