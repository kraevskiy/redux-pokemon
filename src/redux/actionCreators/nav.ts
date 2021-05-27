import {ActionNavTypes} from "../types";

export function showNav() {
  return {
    type: ActionNavTypes.show_nav
  }
}

export function hideNav() {
  return {
    type: ActionNavTypes.hide_nav
  }
}
