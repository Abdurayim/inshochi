import React,{useContext} from 'react';
import { AppContext } from '../App';

const Post = ({post}) => {
    const {handleDelete} = useContext(AppContext);
  
  return (
    
      <div className='post-container'> 
        <div className='post-title'>{post.title}</div>
        <div className='post-body'>{post.body}</div>
        <button 
        onClick={()=>handleDelete(post.id)}>Delete</button>
      </div>

  )
}

export default Post