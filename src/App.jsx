
import './App.css';
import './index.css'
import Navegacion from './componentes/navegacion';
import Boton from './componentes/boton';
import IndexContenido from './componentes/indexContenido';

function App() {
  return (
    <>
      <div className='contenedor superior'> {/* clase contenedor agregada al App.css linea 43  y agregue width 100% en root*/}
        {/*<img src='./assets/Frame.png'/>*/}
        <h2>Arkitex</h2>
        <Navegacion/>
        <Boton texto='Iniciar Sesión' src='' class=''/>
      </div>
      <IndexContenido/>
      <Boton texto='Explora Nuestra Página Web' src='/assets/arrow.png' class='icono' display='displayFlex'/>
    </>
  )
}

export default App
