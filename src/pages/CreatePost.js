import React,{useState,useEffect} from 'react'
import {addDoc, collection} from "firebase/firestore";
import { auth, db } from '../firebase';
import {useNavigate} from "react-router-dom"
import "./createpost.css"

function CreatePost({isAuth}) {
  const [title,setTitle] = useState("");
  const [postText,setPostText] = useState("");

  const postCollectionRef = collection(db,"posts")
  let navigate = useNavigate();

  const createPost = async()=>{
    await addDoc(postCollectionRef, {title,
      postText,
      author:{name:auth.currentUser.displayName,
        id:auth.currentUser.uid},
    });
    navigate("/")
  };

  useEffect(()=>{
    if (!isAuth){
      navigate("/login")
    }
  },[]);


  return (
    <div className='createPost'>
      <div className='container'>
        <h1>Create post</h1>
        <div className='inputgp'>
          <label>Title</label>
          <input placeholder='Title...' onChange={(event) =>{
            setTitle(event.target.value);
          }}/>
        </div>
        <div className='inputgp'>
          <label>Post</label>
          <textarea placeholder='post' onChange={(e)=>{setPostText(e.target.value)}}/>
        </div>
        <button onClick={createPost}>create Post</button>
      </div>

    </div>
  );
}

export default CreatePost;