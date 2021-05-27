import "./styles.sass";
import {useContext} from "react";
import {MainContext} from "../../context/MainContext";

export const Mask = ():JSX.Element => {
  const {nav} = useContext(MainContext)

  const cls = ['mask']

  if(nav.isOpen) cls.push('maskShow')

  return <div className={cls.join(' ')}/>
}
