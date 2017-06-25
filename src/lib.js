import React from 'react'
import text from './titles.json'
import './stylesheets/styles.scss'

const styles = {
  backgroundColor: '#6a6a6a',
  color: 'orangered',
  fontFamily: 'monospace'
}

export const hello = (
  <h1 id="hello" className="header" style={styles}>
  {text.hello}
  </h1>
)

export const goodbye = (
  <h1 id="bye" className="header" style={styles}>
  {text.goodbye}
  </h1>
)
