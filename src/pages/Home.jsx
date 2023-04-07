import React from 'react'

export const Home = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
    <div className='items-center w-150px h-300px mt-20'>
      <h1 className=' text-4xl text-black font-bold text-center bg-yellow-500' style={{fontFamily: 'Dancing Script, cursive'}}>Crea</h1>
      <h1 className=' text-6xl text-white font-bold' style={{fontFamily: 'Bangers, cursive'}}>LA FOTO DE PERFIL</h1>
      <div className='flex gap-6'>
      <h1 className=' text-6xl text-white font-bold' style={{fontFamily: 'Bangers, cursive'}}>PERFECTA</h1>
      <span className='text-5xl text-black font-bold' style={{fontFamily: 'Dancing Script, cursive'}}>para tus</span>
      </div>
      <h1 className=' text-6xl text-yellow-300 font-bold' style={{fontFamily: 'Bangers, cursive'}}>REDES SOCIALES</h1>
    </div>
    </div>
  )
}
