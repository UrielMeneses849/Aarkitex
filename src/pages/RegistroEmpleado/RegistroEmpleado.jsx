import { Box, CssBaseline, Grid, ThemeProvider, createTheme } from '@mui/material';
import './RegistroEmpleado.css';
import FormularioE from '../../layouts/formularioEmpleado/FormularioE';
const theme = createTheme({
  typography:{
    h1:{
      fontSize:35,
    }
  },
  palette:{
    primary:{
      main:'#FF9500',
      blue:'#3E6AD5'
    }
  }
});
function RegistroEmpleado() {
    return (
      <CssBaseline>
        <ThemeProvider theme={theme}>
        {/* Caja azul */}
          <Box bgcolor={"#DEF1FF"} width={"100%"} height={"100%"} component={'main'} padding={'1rem'}>
            {/*Contenedor de img y formulario*/}
            <Grid container columns={2} bgcolor={'white'} height={'100%'} borderRadius={'40px'} overflow={'hidden'}
            boxShadow={"4px 4px 4px #00000040"}>
            {/* Caja de imagen */}
              <Grid component={'div'} xs={1}>
                <img src='./assets/Rectangle 3.svg' className='imagenAzul'></img>
              </Grid>
            {/*Caja de formulario en layouts formularioE*/}
              <FormularioE></FormularioE>
            </Grid>
          </Box>
        </ThemeProvider>
      </CssBaseline>
    )
  }
  
  export default RegistroEmpleado