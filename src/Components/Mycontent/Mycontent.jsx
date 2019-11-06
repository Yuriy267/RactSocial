import React from 'react';
import sels from './Mycontent.module.css';
import Myposts from './Myposts/Myposts';
import Profileinfo from './Profileinfo/Profileinfo';

const Mycontent = (props) => {
  
  return (
    
    
    <div className={sels.myContent}>
      
      <Profileinfo  />
      
      <Myposts posts ={props.posts} />
    </div>)
}

export default Mycontent