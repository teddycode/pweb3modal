import { proxy, subscribe as sub } from 'valtio/vanilla'
import type { CaipNetworkId } from '../utils/TypeUtil.js'

// -- Types --------------------------------------------- //
export interface PublicStateControllerState {
  open: boolean
  selectedNetworkId?: CaipNetworkId
}

// -- State --------------------------------------------- //
const state = proxy<PublicStateControllerState>({
  open: false,
  selectedNetworkId: undefined
})

// -- Controller ---------------------------------------- //
export const PublicStateController = {
  state,

  subscribe(callback: (newState: PublicStateControllerState) => void) {
    return sub(state, () => callback(state))
  },

  set(newState: Partial<PublicStateControllerState>) {
    Object.assign(state, { ...state, ...newState })
  }
}
