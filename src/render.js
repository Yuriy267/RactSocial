import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { addPost, newPostRedact  } from './Components/redux/state';

import { BrowserRouter } from "react-router-dom";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} newPostRedact={newPostRedact} />
        </BrowserRouter>
        , document.getElementById('root'));
}
