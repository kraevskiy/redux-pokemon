import {ActionNavTypes} from "../types";

export type NavState = {
  isOpen: boolean
}

export const initialStateNav: NavState = {
  isOpen: false
}

export interface Actions<T> {
  type: T;
  payload?: object
}

export const nav = (state: NavState = initialStateNav, action: Actions<ActionNavTypes>): NavState => {
  switch (action.type){
    case ActionNavTypes.show_nav:
      return {
        isOpen: true
      }
    case ActionNavTypes.hide_nav:
      return {
        isOpen: false
      }
    default:
      return state
  }
}


