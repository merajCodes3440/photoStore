import { useEffect, useState } from 'react';
import {storage} from "./firebase";
import {ref,uploadBytes,listAll,getDownloadURL} from "firebase/storage";
import {v4} from "uuid";

 const imagelistRef =ref(storage,'images/')
function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList,setImageLIst]= useState([]);

  const uploadImage=()=>{
    if(imageUpload===null) return;
    const imgRef = ref(storage, `images/${imageUpload.name+ v4()}`)
    uploadBytes(imgRef, imageUpload).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then((url)=>{
        setImageLIst((prev)=>[...prev,url]);
        setImageUpload(null);
      })
    })
  }
  useEffect(()=>{
     listAll(imagelistRef).then((responce)=>{
      responce.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          setImageLIst((prev)=>[...prev,url])
        })
      })
     })  
  },[])

  return (
    <div className="maincont">
    <h1 className='logo'>Photo<span>STORE</span></h1>
    <h3>This website is based on FIREBASE Store to store imagages and after that we retrive that data.</h3>
      <div className='sub-cont'>
        <input type="file" onChange={(event)=>setImageUpload(event.target.files[0])}/>
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div className='img-div'>
        {imageList.map((url,index)=>{
          return <img key={index} src={url}/>
        })}
      </div>
    </div>
  )
}
export default App
