import React from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Mycontent from './Components/Mycontent/Mycontent';
import Dialogs from './Components/Dialogs/Dialogs';
import Sett from './Components/Sett/Sett';
import { Route } from "react-router-dom";
import sels from './App.module.css';

const App = (props) => {
  
  let componDialogs = ()=> <Dialogs Hame ={props.state.dialogs.dialogData} 
                           avatar={props.state.dialogs.avatarData} 
                           message={props.state.dialogs.messageData}/>;
  let componMycont = ()=> <Mycontent posts ={props.state.myCont.postData} 
                          addPost = {props.addPost}
                          postRed={props.state.myCont}
                          newPostRedact={props.newPostRedact}/>;
  
  return (
    
      <div className={sels.App}>
        <Header />
        <Navbar friends={props.state.dialogs.avatarData} />
        <div className={sels.content}>
          <Route path='/Mycontent' component={componMycont} />
          <Route path='/Dialogs' component={componDialogs} />
        
          <Route path='/Sett' component={Sett}/>
        </div>

      </div>
  
  );
  
}

export default App;
