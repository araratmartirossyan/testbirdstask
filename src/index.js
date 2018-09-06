import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import registerServiceWorker from './registerServiceWorker'
import data from './data/data.json'
import './theme/index.css'

ReactDOM.render(
  <App users={data} />,
  document.getElementById('root')
)
registerServiceWorker()
