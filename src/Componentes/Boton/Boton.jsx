// eslint-disable-next-line no-unused-vars
import React from 'react';
import './boton.css';
const Boton = (Props)=>{
    return (
        <div className='botonNaranja'>
            <div className={Props.display}>
                <a>{Props.texto}</a>
                <img src={Props.src} className={Props.class}></img>
            </div>
        </div>
    );
};
export default Boton;