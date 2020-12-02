import React, { createContext, useReducer } from 'react'

type State = {
  subscribe: boolean
}

type ActionType = {
  type: 'subscribe'
  payload: boolean
}

const reducer = (state: State, action: ActionType) => {
  const { type, payload } = action
  switch (type) {
    case 'subscribe':
      return { ...state, subscribe: payload }
    default:
      return state
  }
}

const initialState: State = { subscribe: false }

interface SubscribeContextProps {
  state: State
  dispatch: React.Dispatch<ActionType>
}
const SubscribeContext = createContext({
  state: initialState,
} as SubscribeContextProps)

const SubscribeProvider = ({ children }) => {
  const { Provider } = SubscribeContext

  const [state, dispatch] = useReducer(reducer, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
export { SubscribeContext, SubscribeProvider }
