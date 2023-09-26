import { Grid } from '@mui/material';
import Anchor from '../anchor/anchor';

import './Navegacion.css';
function Navbar() {
  
  return (
    <>
      {/*Icono de menu para celulares*/}
      <Grid justifyContent={"center"} display={{xs:"flex",md:"none"}}>
        
      </Grid>
      {/*Enlaces de la barra de navegacion*/}
      <Grid className='navegacion' component={"nav"} maxHeight={{md:"200px"}} display={"flex"}
      flexDirection={{xs:"column",md:"row"}} gap={"2rem"}>
      {/*Estos son otros componentes*/}
        <Anchor textoAnchor='Destacados'></Anchor>
        <Anchor textoAnchor='Testimonios'></Anchor>
        <Anchor textoAnchor='Acerca de Nosotros'></Anchor>
        <Anchor textoAnchor='Contacto'></Anchor>
      </Grid>
    </>
  )
}

export default Navbar