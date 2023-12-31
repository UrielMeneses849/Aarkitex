import { Grid} from "@mui/material"
import BotonRedirectBlanco from "../../Componentes/BotonRedirect/BotonRedirectBlanco"
import Trabajador from "/assets/Trabajador.png";
import Empleador from "/assets/EMPLEADOR.png";
import './registrarse.css'

function Registrarse() {
    return (
        <Grid container style={{backgroundColor:"#FF9500"}}  borderRadius={"50px"}
        boxShadow={"4px 4px 4px #00000040"} py={6} px={2} columns={1} flexDirection={"column"} gap={"3rem"}
        width={"100%"} paddingX={"2rem"} marginLeft={{md:'3rem'}} height={"100%"}>
            <h2 className="opcionRegistro-h2">Registrate</h2>
            <Grid columns={2} display={"flex"} flexDirection={{xs:'column',md:'row'}} sx={{ margin: '50px auto 0'}}>
                <Grid item xs={1} display={"flex"} gap={"1rem"} flexDirection={"column"} 
                alignItems={{xs:"center",md:'start'}}>
                    <h3 className="opcionRegistro-h3" style={{fontSize: '28px'}}>Trabajador</h3>
                    <p className="opcionRegistro-p">Regístrate, difunde tu trabajo y aumenta tus ofertas</p>
                    <BotonRedirectBlanco texto="Registrarse" pagina="/Arkitex/RegistroEmpleado"/>
                </Grid>
                
                <Grid item xs={1}>
                    <img src={Trabajador} className="imgEmpleador" />
                </Grid>

            </Grid>
            <Grid columns={2} display={"flex"} flexDirection={{xs:'column',md:'row'}} sx={{ margin: '50px auto 0'}}>
                <Grid item xs={1} display={"flex"} gap={"1rem"} flexDirection={"column"} alignItems={{xs:"center",md:'start'}}>
                    <h3 className="opcionRegistro-h3" style={{fontSize: '28px'}}>Empleador</h3>
                    <p className="opcionRegistro-p">Encuentra a la persona adecuada para realizar tu remodelación</p>
                    <BotonRedirectBlanco texto="Registrarse" pagina="/Arkitex/RegistroEmpleador" />
                </Grid>
                <Grid item xs={1}>
                    <img src={Empleador} className="imgEmpleador" />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Registrarse