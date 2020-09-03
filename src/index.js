import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import { Provider } from 'react-redux'
import { store } from './redux/store/configureStore'
import { Game } from './components/Game'

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)
