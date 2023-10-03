
import { Box, Grid, Typography } from '@mui/material'
import HeaderHome from '../../layouts/headerHome/headerHome'
import IndexContent from '../../layouts/indexContent/IndexContent'
import img1 from "/assets/Group.svg";
import img2 from "/assets/representacion-3d-modelo-casa-removebg-preview 1.svg";
import stars from "/assets/Group 109.svg";
import stars2 from "/assets/Group 110.svg";
import calendario from "/assets/Vector.svg";
import destacado1 from '/assets/R.svg';
import destacado2 from '/assets/IMG_3707.svg';
import destacado3 from '/assets/Group 106.svg';
import acercade from '/assets/5160106 1.svg'
import './Home.css'
function Home() {
  return (
    <>
      <div>
        <div className='contenedor'>
          <HeaderHome/>
          <IndexContent/>
        </div>
        {/*Testimonios*/}
        <Box width={'100%'} position={'relative'}>
          <Box display={'flex'} justifyContent={{xs:'center', md:'space-between'}} 
          position={'absolute'} zIndex={'1'} width={'100%'}>
              <img src={img2} className='img'></img>
              <img src={img1} className='img'></img>
          </Box>
          <Box bgcolor={'#D9D9D9'} padding={'3rem'} top={{xs:'20rem',sm:'21rem'}} position={'relative'}>
            <Typography variant='h2' fontSize={'2.4rem'} fontWeight={'bold'} >
              Testimonios
            </Typography>
            <Grid container columns={{xs:1,md:3}} marginTop={'1.5rem'} gap={'4rem'} flexWrap={'nowrap'}
            flexDirection={{xs:'column',md:'row'}}>
            <Grid item xs={1} bgcolor={'#FAFAFA'} padding={'2rem'} boxShadow={"4px 4px 4px #00000040"}
            borderRadius={'5px'} height={'420px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                <Box>
                  <Typography variant='body1' fontWeight={'bold'} fontSize={'1.2rem'}>Luis Sánchez</Typography>
                  <img src={stars} className='estrellas'></img>
                </Box>
                <Typography variant='body2' fontSize={'1rem'} marginY={'3rem'}>
                Estamos muy satisfechos con el servicio, excelente atención, nos sentimos satisfechos y seguros
                </Typography>
                <Box display={'flex'} gap={'1rem'}>
                  <img src={calendario} className='calendario'></img>
                  <Typography color={'#888888'}>Hace 1 mes</Typography>
                </Box>
              </Grid>
              <Grid item xs={1} bgcolor={'#FAFAFA'} padding={'1rem'} boxShadow={"4px 4px 4px #00000040"}
              borderRadius={'5px'} height={'420px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                <Box>
                  <Typography variant='body1' fontWeight={'bold'} fontSize={'1.2rem'}>Manuel Sánchez</Typography>
                  <img src={stars2} className='estrellas'></img>
                </Box>
                <Typography variant='body2' fontSize={'1rem'} marginY={'3rem'}>
                Buen trabajo atención personal desde la visita a sitio para evaluar acción a seguir, cotización y ejecución. Recomendable
                </Typography>
                <Box display={'flex'} gap={'1rem'}>
                  <img src={calendario} className='calendario'></img>
                  <Typography color={'#888888'}>Hace 2 semanas</Typography>
                </Box>
              </Grid>
              <Grid item xs={1} bgcolor={'#FAFAFA'} padding={'1rem'} boxShadow={"4px 4px 4px #00000040"}
              borderRadius={'5px'} height={'420px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                <Box>
                  <Typography variant='body1' fontWeight={'bold'} fontSize={'1.2rem'}>Uriel Meneses</Typography>
                  <img src={stars} className='estrellas'></img>
                </Box>
                <Typography variant='body2' fontSize={'1rem'} marginY={'3rem'}>
                Fueron atentos al realizar la cotizacion y seguimiento precios regulares pero decidimos trabajar con alguien de mayor confianza
                </Typography>
                <Box display={'flex'} gap={'1rem'}>
                  <img src={calendario} className='calendario'></img>
                  <Typography color={'#888888'}>Hace 1 semana</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/*Destacados*/}
        <Box position={'relative'} marginTop={'340px'} p={'3rem'} display={'flex'} flexDirection={'column'} gap={'1rem'}>
          <Typography variant='h2' fontSize={'2.4rem'} fontWeight={'bold'} >Destacados</Typography>
          <Typography variant='body1' fontSize={'1.2rem'} color={'#888'}>Conoce los trabajos populares realizados gracias a Arkitex</Typography>
          <Grid container columns={3} columnSpacing={10}>
            <Grid item xs={1}>
              <img src={destacado1}></img>
            </Grid>
            <Grid item xs={1}>
              <img src={destacado2}></img>
            </Grid>
            <Grid item xs={1}>
              <img src={destacado3}></img>
            </Grid>
          </Grid>
        </Box>
        {/*Acerca de nosotros*/}
        <Box p={'3rem'} display={'flex'} flexDirection={'column'} gap={'1rem'}>
          <Typography variant='h2' fontSize={'2.4rem'} fontWeight={'bold'} >Acerca de Nosotros</Typography>
          <Typography variant='body1' fontSize={'1.2rem'} color={'#888'}>¿Qué es Arkitex?</Typography>
          <img src={acercade}></img>
        </Box>
      </div>
    </>
  )
}

export default Home