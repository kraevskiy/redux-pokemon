import {createContext} from "react";
import {combRed} from "../redux/rootReducer";
import {initialStateNav} from "../redux/reducers/nav";
import {initialState} from "../redux/reducers/main";
import {initialStateImages} from "../redux/reducers/images";

export const MainContext = createContext<combRed >({nav: initialStateNav, main: initialState, images: initialStateImages})
