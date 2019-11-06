import React from 'react';
import sels from './Post.module.css';

const Post = (props) => {
  return (
    

      <div className={sels.item}>
        <img className={sels.image} src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' />
        <a>{ `Пост номер ${props.id},  Я говорю: ${props.message}`}</a>
      </div>

    )
}

export default Post