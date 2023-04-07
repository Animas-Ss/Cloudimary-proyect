import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Navegation = () => {

    const navRef = useRef(null);

    const handleNavegation = (e) => {
        const nave = navRef.current;
        const contenidoNav = nave.children;
        Array.from(contenidoNav).forEach(item => {
           item.classList.remove('active')
        });

        e.target.classList.add('active')
    }

    useEffect(() => {
        const nave = navRef.current;
        const contenidoNav = nave.children;
        Array.from(contenidoNav).forEach(element => {
            element.addEventListener('click', handleNavegation)
        });

        return () => {
            Array.from(contenidoNav).forEach(element => {
                element.removeEventListener('click', handleNavegation)
            })
        }


    }, [])


    return (
        <div className='flex justify-between relative w-full pt-5'>
            <div className='text-white ml-5 font-bold'>
                <h3>Animas</h3>
            </div>
            <div ref={navRef} className='flex justify-center items-center gap-20 text-white'>
                <Link to='/' className="nav-item active">Home</Link>
                <Link to='/camara' className="nav-item">Camara</Link>
                <Link to='/remove'className="nav-item">Remove</Link>
                <Link to='/perfil'className="nav-item">Perfil</Link>
            </div>
            <div className=' flex gap-5 mr-5'>
                <button className='text-white'>Login</button>
                <button className=' bg-purple-500 px-4 py-2 rounded-lg'>Sing Up</button>
            </div>
        </div>
    );
};
