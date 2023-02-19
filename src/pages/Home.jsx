import React,{useContext}from 'react';
import Post from './Post';
import { AppContext } from '../App';


const Home = ({}) => {
const {posts} = useContext(AppContext);
  return (
    <div className='Home'>
      {posts.map(post=>
        <Post post={post} key={post.id}/>
        )
       } 
    </div>
  )
}

export default Home