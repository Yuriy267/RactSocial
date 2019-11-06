import React from 'react';
import sels from './Messages.module.css';


const Messages = (props) => {

    return(
        <div className={sels.message}>
             {props.Message}
        </div>
    )
}
    export default Messages