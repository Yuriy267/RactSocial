import React from 'react';
import sels from './Profileinfo.module.css';

const Profileinfo = () => {
  return (
    <div className={sels.myContent}>
      <div className={sels.headContent}>
        <img className={sels.headImg} src="https://louisem.com/wp-content/uploads/2018/04/tumblr-image-sizes-banner.png" />
      </div>
      <div className={sels.myPage}>
        my page
      </div>
      <div className={sels.myPosts}>
        <h1>my posts</h1>
      </div>
      <div className={sels.formNewPost}>
        <a>new post</a>
      </div>
    </div>)
}

export default Profileinfo;