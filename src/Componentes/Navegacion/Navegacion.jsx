// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Navegacion.css';

const Navegacion = ()=>{
    function menu(e){
        const navegacion = document.querySelector('.navegacion');
        navegacion.classList.toggle('mostrar');
    }
    return (
        <>
            <img src='/assets/menu.png' className='menu' onClick={menu}></img>
            <nav className='navegacion'>
                <li className='navegacion__li'>
                    <a>Destacados</a>
                </li>
                <li className='navegacion__li'>
                    <a>Testimonios</a>
                </li>
                <li className='navegacion__li'>
                    <a>Acerca de Nosotros</a>
                </li>
                <li className='navegacion__li'>
                    <a>Contacto</a>
                </li>
            </nav>
        </>
    );
};
export default Navegacion;