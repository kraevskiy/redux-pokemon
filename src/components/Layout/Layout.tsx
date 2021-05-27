import React from 'react';
import "./style.scss";
import {Nav} from "../Nav/Nav";
import {Mask} from "../Mask/Mask";
import Home from "../Home/Home";

export const Layout = (): JSX.Element => {

  return (
    <div className="layout">
      <Nav/>
      <Mask/>
      <div className='container'>
        <Home/>
      </div>
    </div>
  )
}

