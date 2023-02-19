import React, {useState, createContext,useEffect} from 'react';
import { createBrowserRouter,createRoutesFromElements,Link,RouterProvider,
Outlet,Route, } from "react-router-dom";
import Home from './pages/Home';
import Form from './pages/Form';
import About from './pages/About';
import Missing from './pages/Missing';
import api from './api/posts';

export const AppContext = createContext();

function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<Root/>}>
    <Route index element={<Home />}/>
     <Route path="/form" element={<Form/>} /> 
     <Route path="/about" element={<About/>} /> 
     <Route path="*" element={<Missing/>} /> 
</Route>
  )
  
);

const [posts, setPosts ] = useState([]);
const [title,setTitle] = useState('');
const [body,setBody] =useState('');
const [editTitle,setEditTitle] = useState('');
const [editBody, setEditBody] = useState('');





useEffect(()=>{
  const fetchPosts = async ()=>{
    try{
      const response = await api.get('/posts');
      setPosts(response.data);
    }catch(err){
      if(err.message){
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }else{
        console.log(`Error:${err.message}`);
      }
    }
  }

  fetchPosts();
},[])



const handleDelete = async (id)=>{
  try{
    await api.delete (`/posts/${id}`);
  const deleted = posts.filter(post=> post.id !== id );
  setPosts(deleted);
  }catch(err){
    console.log(`Error:${err.message}`);
  }
}

const handleSubmit = async (e)=>{
 e.preventDefault();
 const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
 const newPost = {id, title: title, body: body};
 try{
 const response = await api.post('/posts', newPost);
 const allPosts = [...posts,response.data];
 setPosts(allPosts);
 setTitle('');
 setBody('');
}catch(err){
  console.log(`Error:${err.message}`);
}
}

const handleEdit =async(id)=>{
  const editedPost = {id, title: editTitle, body: editBody};
 try{
const response = await api.put(`/posts${id}`,editedPost);
setPosts(posts.map(post=>post.id === id ?{...response.data} : post));
setEditTitle('');
setEditBody('');
 }catch(err){
  console.log(`Error:${err.message}`);
}
}


  return (
    <AppContext.Provider value={{posts, setPosts,handleDelete,
     setBody, setTitle,title, body,handleSubmit
    }}>
    <div className="App">
      <RouterProvider router={router}/>
    </div>
    </AppContext.Provider>
  );
}

const Root = () =>{
  return(
    <>
      <nav className='Nav'>
        <ul>
          <li><Link to='/'>Bosh sahifa</Link></li>
          <li><Link to="/form">Insho yaratish</Link></li>
          <li><Link  to="/about">Haqida</Link></li>
        </ul>
      </nav>
    <div>
      <Outlet/>
    </div>
    </>
  )
}

export default App;
