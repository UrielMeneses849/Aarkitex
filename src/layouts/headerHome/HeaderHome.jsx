
import Navbar from '../../Componentes/navbar/Navbar';
import BotonRedirect from '../../Componentes/BotonRedirect/BotonRedirect';
import './HeaderHome.css';
import { Grid } from '@mui/material';

function HeaderHome() {
  return (
    <header className='header'>
    <Grid container spacing={2} columns={{xs:1,sm:3}} mt={2} flexDirection={{xs:"column", md:"row"}} 
    alignItems={"center"} gap={"1rem"} justifyContent={"space-between"} p={3} flexWrap={"nowrap"}>
      {/*Logo y nombre de la pagina*/}
      <Grid>
        <div className='logo'>
          <img src='./assets/Frame.png'></img>
          <h2>ARKITEX</h2>
        </div>
      </Grid>
      {/*Links de navegacion Sobre Nosotros, Contacto, Testimoniales, etc*/}
      <Grid>
        {/*Esto esta en la carpeta de componentes*/}
        <Navbar/>
      </Grid>
      {/*Boton de la barra de navegacion para iniciar sesion*/}
      <Grid>
        {/*Esto esta en la carpeta de componentes*/}
        <BotonRedirect pagina='/Arkitex/Login' texto="Iniciar sesión"/>
      </Grid>
    </Grid>
    </header>
  )
}

export default HeaderHome