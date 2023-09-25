
import { Link } from "react-router-dom";
import {Button} from '@mui/material';

import "../Boton/Boton.css";

const StyledButton = (Props) =>{
    return <Button
    variant='contained'
    sx={
        {
            minWidth:'200px',
            height:'50px',
            borderRadius:'25px',
            backgroundColor:'#FF9500',
            '&:hover':{
                background:"#e78122"
            },
            width:'100%'
        }
    }
    >
        {Props.texto}
    </Button>
}

function BotonRedirect(Props) {
    return (
        <Link to={Props.pagina}>
            <StyledButton texto={Props.texto}></StyledButton>
        </Link>
    )
}

export default BotonRedirect