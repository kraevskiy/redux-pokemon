import "./styles.scss"
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {MainContext} from "../../context/MainContext";
import {useDispatch} from "react-redux";
import {hideNav, showNav} from "../../redux/actionCreators/nav";
import List from "../List/List";

export const Nav = (): JSX.Element => {
  const {nav} = useContext(MainContext)
  const dispatch = useDispatch()

  return (
    <div className='navWrapper'
         style={{width: !nav.isOpen ? '1rem' : '25%', height: !nav.isOpen ? '1rem' : '1000px'}}
    >
      <div className='nav'
           style={{width: !nav.isOpen ? '0px' : '100%'}}
      >
        <div className='navHead'>
          <i className='fa fa-times'
             onClick={() => dispatch(hideNav())}
             style={{display: nav.isOpen ? 'block' : 'none'}}
          />
        </div>

        <div className='navBar'
             style={{display: nav.isOpen ? 'block' : 'none'}}
        >
          <ul>
            <li onClick={() => dispatch(showNav())}><NavLink to='/'>Главная</NavLink></li>
          </ul>

          <List/>
        </div>

      </div>

      <div className='navArrow'
           style={{display: !nav.isOpen ? 'block' : 'none'}}
      >
        <i className='fa fa-arrow-right'
           style={{display: !nav.isOpen ? 'block' : 'none'}}
           onClick={() => dispatch(showNav())}
        />

      </div>

    </div>
  )
}
