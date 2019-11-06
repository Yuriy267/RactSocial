import React from 'react';
import sels from './Dialog.module.css';
import { NavLink } from "react-router-dom";


const Dialog = (props) => {
  let path ='/dialogs/'+ props.id
  
  
  return (
    <div className = {sels.dialog}>
      <img className={sels.image} src={props.avatar} />
     <NavLink to={path} className={sels.item} activeClassName={sels.active}> 
     {props.Name}
     </NavLink>
     </div> 
  )
}

export default Dialog