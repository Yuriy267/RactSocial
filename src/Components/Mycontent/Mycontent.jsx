import React from 'react';
import sels from './Mycontent.module.css';
import Myposts from './Myposts/Myposts';
import Profileinfo from './Profileinfo/Profileinfo';

const Mycontent = (props) => {
  
  return (
    
    
    <div className={sels.myContent}>
      
      <Profileinfo  />
      
      <Myposts posts ={props.posts}
                addPost={props.addPost}
                postRed={props.postRed.newPostText}
                newPostRedact={props.newPostRedact}
      />
    </div>)
}

export default Mycontent