import {ActionPokemonTypes} from "../types";
import {Actions} from "../reducers/nav";

export function getPokemons () {
  return async (dispatch: (arg0: Actions<ActionPokemonTypes>) => void) => {
    await fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(pokemons=>{
        dispatch(fetchPokemons(pokemons.results))
        // if(pokemons) {
        //   dispatch(loadPokemons())
        // }
      })
  }
}

export function fetchPokemons (pokemons: []): Actions<ActionPokemonTypes> {
  return {
    type: ActionPokemonTypes.fetch,
    payload: pokemons
  }
}

export function loadPokemons (): Actions<ActionPokemonTypes> {
  return {
    type: ActionPokemonTypes.load
  }
}
