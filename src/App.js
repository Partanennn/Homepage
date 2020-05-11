import React from 'react'
import './css/App.css'
import Balls from './components/Balls'

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="header-text">
          <h1>Aleksi Partanen</h1>
        </div>
        <Balls />
      </div>
      <div className="content">
        <h1>Moi</h1>
      </div>
    </div>
  )
}

export default App
