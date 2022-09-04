import React,{useState,useEffect} from "react";
import {db} from "../firebase";
import { addDoc, collection,getDocs,doc, deleteDoc} from "firebase/firestore";




const Addinfo=(id)=>{

  const [developers,setdevelopers]= useState([])
  const [newname,setNewname]=useState("")
  const [newphone,setphone]=useState(0)
  const [email,setEmail]=useState()


 const developersCollectionRef = collection(db,"developers")
const add =async()=>{
  await addDoc(developersCollectionRef,{name:newname,email:email,phone:Number(newphone)})

}

// const updatedeveloper = async(id,phone)=>{
//   const developerdoc = doc(db,"developers",id);
//   const  newfields ={age:age+1};
//   await updateDoc(developerdoc,newfields)

// }

const deletedeve =async(id)=>{

  const developersDoc=doc(db,"developers",id);
  await deleteDoc(developersDoc);
}

  useEffect(()=>{

  const getdevlopers= async()=>{
    const data = await getDocs(developersCollectionRef);
    setdevelopers(data.docs.map((doc)=> ({...doc.data(),id: doc.id})));
  }
  getdevlopers()
  },[])


  return(
    <div>
      {""}
      <input type="text" placeholder="name.." onChange={(e)=>setNewname(e.target.value)}/>
      <input type="email" placeholder="email.." onChange={(e)=>setEmail(e.target.value)}/>
      <input type="number" placeholder="phone.." onChange={(e)=>setphone(e.target.value)}/>


      <button onClick={add}>Add</button>
      {developers.map((developer)=>{
        return(
          <div>
          <h1>Name:{developer.name}</h1>
          <h1>phone no:{developer.phone}</h1>
          <h1>Email:{developer.email}</h1>
          {/* <button onClick={()=>{updatedeveloper(developer.id,developer.age)}}>increase age</button> */}
          <button onClick={()=>{deletedeve(developer.id)}}>delete</button>
          </div>
        )
      })}
      <h1>ehhuwryueg</h1>
    </div>
  )
}

export default Addinfo;