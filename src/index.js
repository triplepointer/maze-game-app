import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import { Provider } from 'react-redux'
import { store } from './redux/store/configureStore'
import { Game } from './components/Game'

// var audio = new Audio(
//   'https://music-music-mp3.com//api/NDQ2OWNkMjNkMTk3MmZkYTM3ODg3NzQ1OTMzMjVkODZ8bG9hZA.mp3'
// )
// audio.play()

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)
