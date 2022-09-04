
import { getDocs, collection,doc,deleteDoc} from 'firebase/firestore'
import React,{useEffect,useState} from 'react'
import {auth,db} from '../firebase';
import { AiFillDelete } from 'react-icons/ai';
import './home.css'


function Home({isAuth}) {
  const [postlist,setpostlist]=useState([])
  const postCollectionRef = collection(db,"posts");

  useEffect(()=>{
    const getPosts = async()=>{
      const data =await getDocs(postCollectionRef);
      setpostlist(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    };
    getPosts();
  },[]);
  
  const deletePost = async(id)=>{
    const postDoc =doc(db,"posts",id);
    await deleteDoc(postDoc);
  };
  return (
    <div className='homepage'>
      {postlist.map((posts)=>{
        return(
          <div className='post'>
            <div className='postheader'>
              <div className='title'>
                <h1>{posts.title}</h1>
              </div>
              <div className='deletepost'>
                {isAuth && posts.author.id === auth.currentUser.uid && (
                  <button onClick={()=>{deletePost(posts.id);}}><AiFillDelete /></button>
                )} 
              </div>
              </div>
              <div className='PostText-container'>{posts.postText}</div> 
              <h3>@{posts.author.name}</h3>
              
          </div>
        );
      })}
    </div>
  );
}

export default Home;