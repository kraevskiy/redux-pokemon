import {combineReducers} from "redux";
import {nav, NavState} from "./reducers/nav";
import {InitialMainTypes, main} from "./reducers/main";
import {images, ImagesStateTypeRecord} from "./reducers/images";

export interface combRed {
  nav: NavState,
  main: InitialMainTypes,
  images: ImagesStateTypeRecord
}

const rootReducer = combineReducers(
    {
      nav,
      images,
      main,
    })

export default rootReducer;
