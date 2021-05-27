import {ActionPokemonImageTypes} from "../types";
import {ImagesStateTypeRecord} from "../reducers/images";
import {Actions} from "../reducers/nav";

export function getImages() {
  return async (dispatch: (arg0: Actions<ActionPokemonImageTypes>) => void)=>{
    await fetch('https://pokemon-371d3.firebaseio.com/pokemons.json')
      .then(res => res.json())
      .then(images => {
        dispatch(fetchImages(images))
      })
  }
}

export function fetchImages(images: ImagesStateTypeRecord): Actions<ActionPokemonImageTypes>{
  return {
    type: ActionPokemonImageTypes.fetch,
    payload: images
  }
}
