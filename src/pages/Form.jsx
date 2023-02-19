import React,{useContext} from 'react';
import { AppContext } from '../App';


const Form = () => {
    const {title,body,setBody, setTitle,handleSubmit} = useContext(AppContext);

  
  return (
    <main className='newPost'>
      <h1>Insho yarating</h1>
        <form className='postForm' onSubmit={handleSubmit}>
          <label htmlFor="Title">Sarlavha:</label>
            <input 
            id='title'
            value={title}
            type="text"
            required
            placeholder='Sarlavhangiz'
            onChange={(e)=>setTitle(e.target.value)}></input>
            <label htmlFor="Body">Insho:</label>
            <textarea
            value={body}
            placeholder="Asosiy Qism"
            required
            onChange={(e)=>setBody(e.target.value)}></textarea>
            <button type='submit'>Chop Etmoq</button>
        </form>
    </main>
  )
}

export default Form