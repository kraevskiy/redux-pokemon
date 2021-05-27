import {Actions} from "./nav";
import {ActionPokemonImageTypes} from "../types";

export interface ImagesStateTypeRecord {
  [key: string]: string
}

export const initialStateImages: ImagesStateTypeRecord = {}

export const images = (state: ImagesStateTypeRecord = initialStateImages, action: Actions<ActionPokemonImageTypes>) => {
  switch (action.type) {
    case ActionPokemonImageTypes.fetch:
      return {
        ...state,
        images: action.payload
      }
    default:
      return state
  }
}
