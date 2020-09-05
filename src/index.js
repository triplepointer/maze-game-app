import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import { Provider } from 'react-redux'
import { store } from './redux/store/configureStore'
import { Game } from './components/Game'
import music from './music/massive_attack_and_mos_def-i_against_i.mp3'

function f() {
  var audio = new Audio(music)
  audio.play()
}

f()
ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)
