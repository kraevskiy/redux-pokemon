import {useContext} from "react";
import {MainContext} from "../../context/MainContext";
import {NavLink} from "react-router-dom"
import {useDispatch} from "react-redux";
import {hideNav} from "../../redux/actionCreators/nav";

const List = (): JSX.Element => {
  const {main: {pokemons}} = useContext(MainContext)
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(hideNav())
  }

  return (
    <ul>
      {
        pokemons?.map((p, i) => (
          <li key={p.name + i}>
            <NavLink to={`/item/${p.name}`} onClick={() => handleClick()}>
              {p.name}
            </NavLink>
          </li>
        ))
      }
    </ul>
  )
}

export default List
