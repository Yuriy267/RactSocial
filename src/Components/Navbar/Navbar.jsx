import React from 'react';
import sels from './Navbar.module.css';
import Friends from './Friends/Friends';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className={sels.navBar}>
      <div className={sels.item}>
        <NavLink to='/mycontent' activeClassName={sels.activel}>my page</NavLink>
      </div>
      <div className={sels.item}>
        <NavLink to='/dialogs' activeClassName={sels.activel}>mesage</NavLink>
      </div>
      <div className={sels.item}>
      <NavLink to='/sett' activeClassName={sels.activel}>settings</NavLink>
      </div>
      <div>
        <Friends friends ={props.friends} />
      </div>
    </nav>)
}

export default Navbar;