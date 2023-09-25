
import HeaderHome from '../../layouts/headerHome/headerHome'
import IndexContent from '../../layouts/indexContent/IndexContent'
import './Home.css'
function Home() {
  return (
    <div className='contenedor'>
      <HeaderHome/>
      <IndexContent/>
    </div>
  )
}

export default Home