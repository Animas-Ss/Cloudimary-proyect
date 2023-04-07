import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam';
import { Image } from 'cloudinary-react';
import { useContext } from 'react';
import { StoreContext } from '../contexts/store';


export const Camara = () => {
  const { foto, setFoto , setCamara} = useContext(StoreContext)
  const webcamRef = useRef(null);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const imageData = await fetch(imageSrc).then((res) => res.blob());
    const url = await uploadImage(imageData);

    setFoto(url);
  };

  const uploadImage = async (imageData) => {
    const formData = new FormData();
    formData.append('file', imageData);
    formData.append('upload_preset', 'imagenes');

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/animas/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();
    setCamara(data)
    return data.secure_url;
  };

  return (
    <div className='flex justify-center flex-col items-center w-full h-full'>
    <h1 className=' text-blue-500'>Camara</h1>
    <div className='flex gap-5'>
      <div className='cam-web'>
        <Webcam audio={false} ref={webcamRef} width="500" screenshotFormat="image/jpeg" />
      </div>
    {
      foto && (
        <div>
          <Image cloudName="animas" publicId={foto} width="300" crop="scale" />
        </div>
      )
    }
    </div>
    <button onClick={capture} className='bg-blue-700 text-center text-white px-2 py-4 rounded-lg mt-10'>Capturar imagen</button>
  </div>
  )
}
