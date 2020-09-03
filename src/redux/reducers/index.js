import { combineReducers } from 'redux'
import { footerReducer } from './footer'
import { boardReducer } from './board'

export const rootReducer = combineReducers({
  footer: footerReducer,
  board: boardReducer,
})
