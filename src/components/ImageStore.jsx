import React, { useContext, useEffect,  useState} from 'react'
import { StoreContext } from '../contexts/store'
import 'two-up-element';



export const ImageStore = () => {
  const { imageOrigin, imageBg, loading, setLoading } = useContext(StoreContext);
  const [proccessImage, setProccessImage] = useState(true);
  const [trie, setTrie] = useState(0);
  
  let intervalID;

  useEffect(() => {
    if(proccessImage){
      clearInterval(intervalID);
      intervalID = setInterval(() => {
        setTrie((prev) => prev + 1)
      }, 500)
    }else{
      clearInterval(intervalID)
    }

    return () => {
      clearInterval(intervalID)
    }

  }, [proccessImage])

console.log(trie)


  return (
    <div className='grid gap-3'>
    <two-up>
        <img src={imageOrigin} alt='image orgin upload in cloudinary'/>
        <img onLoad={() => setProccessImage(false)} onError={() => setProccessImage(true)} src={`${imageBg}&t=${trie}`} alt='image modified form cluadinary' />
    </two-up>
    <a href='' className='bg-blue-500 hover:bg-blue-700 text-lg text-center text-white w-60 m-auto rounded-lg px-4 py-2'>Descargar</a>
    </div>
  )
}