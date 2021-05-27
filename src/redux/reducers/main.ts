import {Actions} from "./nav"
import {ActionPokemonTypes} from "../types";

export interface ResultPokemon {
  name: string;
  url: string;
}

export interface InitialMainTypes {
  pokemons: ResultPokemon[];
  loading: boolean
}

export const initialState: InitialMainTypes = {
  pokemons: [],
  loading: false
}


export const main = (state: InitialMainTypes = initialState, action: Actions<ActionPokemonTypes>) => {
  switch (action.type){
    case ActionPokemonTypes.fetch:
      return {
        ...state,
        pokemons: action.payload
      }
    case ActionPokemonTypes.load:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
