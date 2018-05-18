// @flow
import type { ActionT, StoreT } from '../domain/types'

export const createReducer = (reducerMap: Object, initialState: StoreT) => {
  return (state: StoreT = initialState, action: ActionT) => {
    let stateUpdates = state
    const reducer = reducerMap[action.type]

    if (reducer) {
      stateUpdates = reducer(state, action.payload, action)
    }

    return stateUpdates === state ? state : { ...state, ...stateUpdates }
  }
}