import React from 'react';
import { useContext, useEffect } from 'react';
import { StoreContext } from '../contexts/store';
import { AdvancedImage } from 'cloudinary-react';
import { Cloudinary } from '@cloudinary/url-gen';
import { crop, fill, scale } from '@cloudinary/url-gen/actions/resize';


import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

import { format } from '@cloudinary/url-gen/actions/delivery';
import { auto } from '@cloudinary/url-gen/qualifiers/quality';
import { max } from '@cloudinary/url-gen/actions/roundCorners';
import { useState } from 'react';


const cld = new Cloudinary({
  cloud:{
    cloudName: 'animas',
  },
  url: {
    secure: true,
  }
})

export const Perfil = () => {
  const { foto, camara } = useContext(StoreContext);
 

  if(!camara) return
    const { public_id } = camara;
    const imageTransform = cld.image(public_id)
    .resize(
      crop()
      .width(400)
      .height(400)
      .gravity(focusOn(FocusOn.face()))
      ).resize(scale().width(200)).delivery(format(auto())).roundCorners(max())

  console.log(imageTransform.toURL())
  

  
 


  return (
    <div className='flex justify-center items-center w-full h-screen'>
    {
      foto && (
        <img src={imageTransform.toURL()} alt="foto para editar"/>
      )
    }
  </div>
  )
}
