import { Box, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
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
        <Grid container columns={3}>
            <Grid item xs={2}>
                <TextField aria-label='#FF9500' id="nombreEmpleado" label="Tu Nombre" variant="standard" type='text' className='nombreE'/>
            </Grid>
            <Grid item xs={1}>
                <TextField id="edad" label="Edad" variant="standard" type='number'/>
            </Grid>
        </Grid>
        <Grid container columns={3}>
            <Grid item xs={2}>
                <TextField id="zona" label="Zona de Trabajo" variant="standard" className='nombreE'/>
            </Grid>
            <Grid item xs={1}>
                <TextField id="colonia" label="Colonia" variant="standard"/>
            </Grid>
        </Grid>
        <TextField id="curp" label="CURP" variant="standard" size='small' className='curp'/>
        <FormControlLabel
            control={
                <Checkbox name="trabajoEnOtrasZonas" />
            }
            className='negritas'
            label="¿Puedes trabajar en otras zonas?"
        />
        <FormControl sx={{width:'20%'}}>
            <InputLabel id="demo-simple-select-label">Años de experiencia</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={1}
                label="Años de experiencia"
            >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10+</MenuItem>
            </Select>

        </FormControl>
        <Grid>
            <BotonRedirect texto='Siguiente' pagina="/Aarkitex/RegistroEmpleado2"></BotonRedirect>
        </Grid>
    </Box>
}
import './FormularioE.css'
import BotonRedirect from '../../Componentes/BotonRedirect/BotonRedirect'
function FormularioE() {
    return (
    <Grid item component={'div'} xs={1} display={'flex'} padding={'2rem 0'}
        flexDirection={'column'} alignItems={'center'} gap={"1rem"}>
        <Typography variant='h1' color={'blue'} fontWeight={'bold'}>Regístrate como trabajador</Typography>
        <img className='progresoRegE' src='./assets/Group 36.svg' ></img>
        <Typography variant='body1'>Agrega tus datos</Typography>
        <FormE></FormE>
    </Grid>
    )
}

export default FormularioE