import { Box, Typography } from "@mui/material";
import favoritos from '/assets/heart-svgrepo-com.svg';
import user from '/assets/user.svg';
import './Inicio.css';
function Inicio() {
    return (
        <Box p={3} display={'flex'} justifyContent={'space-between'}>
            <Typography variant="body1" fontSize={'2rem'}>ARKITEX |</Typography>
            <Box display={'flex'} gap='1rem'>
                <Box display={'flex'} gap={'5px'} alignItems={'center'}>
                    <Typography variant="body1" fontSize={'1rem'}>Favoritos</Typography>
                    <img src={favoritos} className="iconosFC"></img>
                    <Typography variant="body1" fontSize={'1rem'}>|</Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'}>
                    <Typography variant="body1" fontSize={'1rem'}>Contactanos |</Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'}>
                    <img src={user} className="iconosFC"></img>
                </Box>
            </Box>
        </Box>
    )
}

export default Inicio