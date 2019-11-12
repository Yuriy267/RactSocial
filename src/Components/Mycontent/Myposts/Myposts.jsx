import React from 'react';
import sels from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = (props) => {
  

    let postElem = props.posts.map( postEm => <Post id={postEm.nam} message={postEm.iSay}/>)
    
    let newPostElement = React.createRef();
    
    
    let addButtonPost = () => {
      
      
      props.addPost();
      
       };
       
       const changeNewPost = (event) => {
        
        props.newPostRedact(event.target.value);
        
        
    };
      
     

       return (
    <div className={sels.myPosts}>
      <div className="div">
      <textarea onChange={changeNewPost} ref = {newPostElement} value ={props.postRed}/>
      </div>
    <div className="div">
      <button onClick={addButtonPost}>Add post</button>
    </div>
      {postElem}
    </div>)
  
}

  
  
    
   

export default Myposts