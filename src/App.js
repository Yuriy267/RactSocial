import React from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Mycontent from './Components/Mycontent/Mycontent';
import Dialogs from './Components/Dialogs/Dialogs';
import Sett from './Components/Sett/Sett';
import { Route, BrowserRouter } from "react-router-dom";
import sels from './App.module.css';

const App = (props) => {
  
  let componDialogs = ()=> <Dialogs Hame ={props.state} 
                           Message ={props.state}
                          avatar ={props.state}/>;
  
  return (
    <BrowserRouter>
      <div className={sels.App}>
        <Header />
        <Navbar friends={props.state} />
        <div className={sels.content}>
          <Route path='/Mycontent' render={ () => <Mycontent posts ={props.state}/>} />
          <Route path='/Dialogs' component={componDialogs} />
          <Route path='/Sett' component={Sett}/>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
