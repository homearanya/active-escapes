import React, { createContext, useReducer } from 'react'

type State = {
  modalActivities: boolean
  modalDestinations: boolean
}

type ActionType = {
  type: 'toggleModalActivities' | 'toggleModalDestinations'
  payload: boolean
}

const reducer = (state: State, action: ActionType) => {
  const { type, payload } = action
  switch (type) {
    case 'toggleModalActivities':
      return { ...state, modalActivities: payload }
    case 'toggleModalDestinations':
      return { ...state, modalDestinations: payload }
    default:
      return state
  }
}

const initialState: State = { modalActivities: false, modalDestinations: false }

interface ModalContextProps {
  state: State
  dispatch: React.Dispatch<ActionType>
}
const ModalContext = createContext({ state: initialState } as ModalContextProps)

const ModalProvider = ({ children }) => {
  const { Provider } = ModalContext

  const [state, dispatch] = useReducer(reducer, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
export { ModalContext, ModalProvider }
