import { Box, Grid, TextField, Typography } from '@mui/material'
//login

const FormE = ()=>{
    return <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1},
        }}
        width={'80%'}
        noValidate
        autoComplete="off"
        display={"flex"}
        flexDirection={"column"}
        onSubmit={"Login"}
    >
        <Box display={'flex'} flexDirection={'column'} gap={'2rem'}>
            <TextField label='Correo' id='correo' variant="outlined" type='email' name='correo'></TextField>
            <TextField label='Password' id='password' variant="outlined" type='password' name='password'></TextField>
            <TextField label='Numero de celular' id='celular' variant="outlined" type='tel' name='telefono'></TextField>
        </Box>
        <Grid>
            <BotonRedirect texto='Siguiente' pagina="/Aarkitex/Inicio"></BotonRedirect>
        </Grid>
    </Box>
}
import './FormularioE.css'
import BotonRedirect from '../../Componentes/BotonRedirect/BotonRedirect'
function FormularioE3() {
    return (
    <Grid item component={'div'} xs={1} display={'flex'} padding={'2rem 0'}
        flexDirection={'column'} alignItems={'center'} gap={"1rem"}>
        <Typography variant='h1' color={'primary'} fontWeight={'bold'}>Regístrate como trabajador</Typography>
        <img className='progresoRegE' src='./assets/Group 36.svg' ></img>
        <Typography variant='body1'>Agrega tus datos de contacto</Typography>
        <FormE></FormE>
    </Grid>
    )
}

export default FormularioE3