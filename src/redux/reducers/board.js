export const initialState = {
  choosedNumber: Math.floor(Math.random() * 9) + 1,
}

export function boardReducer(state = initialState) {
  return state
}
