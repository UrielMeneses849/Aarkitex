import { Box, TextField, Typography,Grid } from '@mui/material'
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
    >
        <Box display={'flex'} flexDirection={'column'} gap={'2rem'}>
            <input type='file'></input>
            <TextField label='Trabajos que domina' variant="outlined" type='text'
            className='nose'></TextField>
            <TextField variant="outlined" type='text' sx={{width:'20%'}}></TextField>
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={'2rem'}>
            <TextField label='Referencias de importancia' variant="outlined" type='text'></TextField>
            <TextField variant="outlined" type='text' sx={{width:'20%'}}></TextField>
        </Box>
        <Grid>
            <BotonRedirect texto='Siguiente' pagina="/Aarkitex/RegistroEmpleado3"></BotonRedirect>
        </Grid>
    </Box>
}
import './FormularioE.css'
import BotonRedirect from '../../Componentes/BotonRedirect/BotonRedirect'
function FormularioE() {
    return (
    <Grid item component={'div'} xs={1} display={'flex'} padding={'2rem 0'}
        flexDirection={'column'} alignItems={'center'} gap={"1rem"}>
        <Typography variant='h1' color={'primary'} fontWeight={'bold'} >Regístrate como trabajador</Typography>
        <img className='progresoRegE' src='./assets/Group 36.svg' ></img>
        <Typography variant='body1'>Agrega tus fotos</Typography>
        <FormE></FormE>
    </Grid>
    )
}

export default FormularioE