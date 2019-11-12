import React from 'react';
import sels from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import './Dialogstoo.css';
import Messages from './Messages/Messages';


const Dialogs = (props) => {
   

          
    return (
        <div className={sels.myDialogs}>
            <div className={sels.dialog}>
            
                 {props.Hame.map( di => <Dialog id={di.id} Name={di.Name} avatar ={ props.avatar[di.id - 1].imgsrc} /> )} 

                
            </div>
            <div className={sels.messages}>
                 {props.message.map( mes => (<Messages id={mes.id} Message={mes.Message}/>))}
                
            </div>
        </div>)
}

export default Dialogs