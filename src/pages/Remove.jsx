import { Update } from '../components/Update';
import { StoreContext}  from '../contexts/store';
import ImagenLoadState from '../contexts/types.imagen';
import { ImageStore } from '../components/ImageStore';
import { useContext } from 'react';

  


export const Remove = () => {
  const { imageState } = useContext(StoreContext);

    return (
        <div className='w-full h-screen'>
            <div className='max-w-xl m-auto grid grid-cols-1 place-content-center w-full p-4'>
                <header className='flex justify-center py-10'>
                    <h1 className='text-3xl font-bold text-blue-900'>animas<span className='text-blue-600'>bg</span></h1>
                </header>
                <main className='w-full block'>
                    {imageState === ImagenLoadState.READY || imageState === ImagenLoadState.UPLOADING ? <Update /> : < ImageStore />}
                </main>
                <footer className='flex justify-center items-center gap-x-2 font-semibold pt-10'>
                    Hecho con <a href='https://cloudinary.com' target='_blank' rel='noreferrer'>Cloudinary</a>
                </footer>
            </div>
        </div>
    )
}
