import React from 'react';
import sels from './Myposts.module.css';
import Post from '../../Post/Post';

const Myposts = (props) => {
  

    let postElem = props.posts.myCont.postData.map( postEm => (<Post id={postEm.nam} message={postEm.iSay}/>))
    
    let newPostElement = React.createRef();
    let addPost = () => {
      let text = newPostElement.current.value;
      alert(text);
}
  return (
    
    <div className={sels.myPosts}>
      <div className="div">
      <textarea ref = {newPostElement}></textarea>
    </div>
    <div className="div">
      <button onClick={ addPost }>Add post</button>
    </div>
      {postElem}
    </div>)
}

export default Myposts