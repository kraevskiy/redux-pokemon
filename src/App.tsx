import {useDispatch, useSelector} from "react-redux";
import {Layout} from "./components/";
import {MainContext} from "./context/MainContext";
import {combRed} from "./redux/rootReducer";
import {useEffect} from "react";
import {getPokemons} from "./redux/actionCreators/main";
import {getImages} from "./redux/actionCreators/images";

const App = (): JSX.Element => {
  const state = useSelector((state: combRed) => state)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getImages())
    dispatch(getPokemons())
  }, [])

  return (
    <MainContext.Provider value={{...state}}>
      <Layout/>
    </MainContext.Provider>
  );
}

export default App;
