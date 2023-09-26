import BotonRedirect from '../../Componentes/BotonRedirect/BotonRedirect';
import ContenidoIndex from '../../Componentes/ContenidoIndex/ContenidoIndex';
import { Grid } from '@mui/material';

function IndexContent() {
    return (
        <>
            <Grid display={'flex'} justifyContent={"center"} flexDirection={"column"} alignItems={"Center"}
            gap={"1.5rem"} mt={"6rem"}>
                {/*Componente que muestra el texto que esta centrado en el index*/}
                <ContenidoIndex />
                {/*Reutilizamos el componente de boton*/}
                <BotonRedirect pagina='/Arkitex/Login' texto="Explora Nuestra Pagina Web" />
            </Grid>
        </>
    )
}

export default IndexContent