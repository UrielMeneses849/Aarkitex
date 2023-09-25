
import { Link } from "react-router-dom";
import {Button} from '@mui/material';

import "../Boton/Boton.css";

const StyledButton = (Props) =>{
    return <Button
    variant='contained'
    sx={
        {
            minWidth:'100px',
            height:'10px',
            borderRadius:'25px',
            backgroundColor:'#FFF',
            color:"#FF9500",
            '&:hover':{
                background:"#BBB",
                color:'black'
            },
            padding:"1.5rem 2rem",
            fontSize:'10px',
            fontWeight:"700"
        }
    }
    >
        {Props.texto}
    </Button>
}

function BotonRedirectBlanco(Props) {
    return (
        <Link to={Props.pagina}>
            <StyledButton texto={Props.texto}></StyledButton>
        </Link>
    )
}

export default BotonRedirectBlanco