import { Box } from '@mui/system'
import { TextField, ThemeProvider, createTheme } from '@mui/material'
const theme = createTheme({
    palette:{
        primary:{
            main:'#FF9500'
        }
    }
});
function Formulario() {
    return (
    <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1},
        }}
        width={{sx:'15ch', sm:'25ch',md:'30ch'}}
        noValidate
        autoComplete="off"
        display={"flex"}
        flexDirection={"column"}
    >
        <ThemeProvider theme={theme}>
            <TextField aria-label='#FF9500' id="correo" label="Correo" variant="outlined" type='text'/>
            <TextField id="password" label="Contraseña" variant="outlined" type='password'/>
        </ThemeProvider>
        
    </Box>
  )
}

export default Formulario