import React from 'react';
import sels from './Friends.module.css';
import {NavLink} from "react-router-dom";
import Dialog from '../../Dialogs/Dialog/Dialog'


const Friends = (props) => {
  return (
  <div className={sels.friends}>
     <div className={sels.headname}>My Friends</div> 
     <div className={sels.item}> 
     {props.friends.dialogs.avatarData.map( di =>  <img className={sels.image} src={di.imgsrc} /> )} 
     <img className={sels.image} src={props.avatar} />
     </div>
  </div>)
}

export default Friends;