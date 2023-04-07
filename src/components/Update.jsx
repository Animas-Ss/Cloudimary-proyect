import Dropzone from "dropzone"
import { useContext, useEffect, useRef } from "react"
import { StoreContext } from "../contexts/store"
import ImagenLoadState from "../contexts/types.imagen"
import { Cloudinary } from '@cloudinary/url-gen';
import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";

const cld = new Cloudinary({
    cloud:{
      cloudName: 'animas',
    },
    url: {
      secure: true,
    }
  })


export const Update = (props) => {

  // mi estado global

  const { imageState, setImageState, imageOrigin, setImageOrigin, imageBg, setImageBg } = useContext(StoreContext);

  console.log(imageState)

  const dropzoneRef = useRef(null)

  useEffect(() => {
    const dropzoneElement = dropzoneRef.current


    const dropzone = new Dropzone(dropzoneElement, {
      uploadMultiple: false,
      acceptedFiles: ".jpg, .png, .webp",
      maxFiles: 1,
    })

    // enviando archivo la url esta como action de mi formulario
    dropzone.on('sending', (file, xhr, formData) => {
      setImageState(ImagenLoadState.UPLOADING);
      formData.append('upload_preset', 'imagenes');
      formData.append('timestamp', Date.now() / 1000);
      formData.append('api_key', '446523458312223')
    })

    //respuesta del envio 
    dropzone.on('success', (file, response) => {
      const { public_id: id ,secure_url: url } = response;

      const imageRemove =  cld.image(id)
      .effect(backgroundRemoval());
      setImageOrigin(url);

      console.log(imageRemove)

      setImageBg(imageRemove.toURL())
      console.log(imageRemove.toURL())
      
      setImageState(ImagenLoadState.DONE)
      console.log(response);
      console.log("Subida con exito");
    })

    //error del envio
    dropzone.on("error", (file, response) => {
      console.log("error en el envio");
      console.log(response)
    })

    return () => {
      dropzone.destroy()
    }

  }, [])

  /*  const handleImagen = async (e) => {
     setImagen(e.target.files[0])
     const file = e.target.files[0];
     const data = new FormData();
 
     data.append('file', file)
     data.append('upload_preset', 'imagenes');
     
 
     const res = await fetch(
       "", {
         method: 'POST',
         body: data
       })
     const files = await res.json();
     //console.log(res);
     //console.log(files.secure_url)
     setImagen(files.secure_url);
   } */

  return (
    <form ref={dropzoneRef} className='shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-full flex items-center justify-center flex-col' action="https://api.cloudinary.com/v1_1/animas/image/upload">
      {imageState === ImagenLoadState.READY ? (<><button className=' pointer-events-none bg-blue-600 rounded-full text-bold text-white text-xl px-6 py-4'>
        Upload image
      </button>
      <strong className="text-lg mt-4 text-gray-800">or drop o file</strong></>): imageState === ImagenLoadState.UPLOADING ? <strong className="text-lg mt-4 text-gray-800">Uploading ...</strong> : ""}
    </form>
  )
}
