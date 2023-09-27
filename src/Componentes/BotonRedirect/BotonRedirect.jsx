
import { Link } from "react-router-dom";
import {Button} from '@mui/material';

import "../Boton/Boton.css";

const StyledButton = (Props) =>{
    return <Button
    variant='contained'
    sx={
        {
            color:'#fff',
            minWidth:'280px',
            height: '60px',
            borderRadius:'25px',
            fontWeight: "600",
            backgroundColor:'#FF9500',
            '&:hover':{
                background:"#F78122"
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
            <StyledButton texto={Props.texto} />
        </Link>
    )
}

export default BotonRedirect
