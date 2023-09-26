import IniciarSesion from "../../layouts/iniciarSesion/IniciarSesion"
import Registrarse from "../../layouts/registrarse/registrarse"
import { Grid } from "@mui/material"
import "./Login.css"

function Login() {
    return (
        <div className="cont">
            <Grid border={"6px solid #FF9500"} height={"100%"} container
            columns={{xs:1,md:2}} px={{xs:3,md:8}} py={3} borderRadius={"1rem"} flexDirection={"row"}
            boxSizing={"border-box"}>
                {/*Formulario de login*/}
                <Grid item xs={1} >
                    <IniciarSesion />
                </Grid>
                {/*Tipo de registro*/}
                <Grid item xs={1} px={{xs:0,md:5,lg:15,xl:20}} mt={{xs:'1rem', md:'0'}}>
                    <Registrarse />
                </Grid>
            </Grid>
        </div>
    )
}

export default Login