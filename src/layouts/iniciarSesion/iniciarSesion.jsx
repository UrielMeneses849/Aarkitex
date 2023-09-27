import { Grid } from '@mui/material'
import Formulario from '../../Componentes/Formulario/Formulario'
import BotonRedirect from '../../Componentes/BotonRedirect/BotonRedirect'
import './IniciarSesion.css'

function IniciarSesion() {
    return (
            <Grid boxShadow={"4px 4px 4px #00000040"} borderRadius={"50px"} display={"flex"}
            justifyContent={"center"} alignItems={"center"} flexDirection={"column"} p={3}
            height={"100%"} border={"black 0.2px solid"}>
                <div className="login">
                    <h2 className="login__h2">Bienvenido a Arkitex</h2>
                    <h3 className="login__h3">Iniciar Sesion</h3>
                    <Formulario></Formulario>
                    <BotonRedirect texto="Iniciar sesión"></BotonRedirect>
                    <hr className="hr"/>
                    <p>¿Solo quieres dar un vistazo?</p>
                    <BotonRedirect texto="Visitar Sitio" pagina='/Arkitex'></BotonRedirect>
                </div>
            </Grid>
    )
}

export default IniciarSesion