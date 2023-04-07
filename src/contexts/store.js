import React, { createContext, useState } from 'react'
import ImagenLoadState from './types.imagen';

// crea un nuevo contexto
export const StoreContext = createContext();


//crea el componente provider
export const StoreProvider = ({ children }) => {
  const [imageState, setImageState] = useState(ImagenLoadState.READY)
  const [imageOrigin, setImageOrigin] = useState(null)
  const [imageBg, setImageBg] = useState(null)
  const [foto, setFoto] = useState(null);
  const [camara, setCamara] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <StoreContext.Provider value={{
      imageState,
      setImageState,
      imageOrigin,
      setImageOrigin,
      imageBg,
      setImageBg,
      foto,
      setFoto,
      camara,
      setCamara,
      loading,
      setLoading
    }}>
      {children}
    </StoreContext.Provider>
  )
}
