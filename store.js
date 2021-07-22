import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export const actionTypes = {
  ALL_CHAINS_DATA: 'all_chains_data',
  WALLET: 'wallet',
  RESET_WALLET: 'reset_wallet',
}

let store

const initialState = {
  all_chains_data: [],
  wallet: {
    provider: null,
    web3_provider: null,
    chain_id: null,
    address: null,
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALL_CHAINS_DATA:
      return { ...state, all_chains_data: action.payload }
    case actionTypes.WALLET:
      return { ...state, wallet: { ...state.wallet, ...action.payload } }
    case actionTypes.RESET_WALLET:
      return { ...state, wallet: initialState.wallet }
    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
