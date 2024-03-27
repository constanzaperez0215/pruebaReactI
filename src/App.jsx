import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './componentes/MiApi'
import NavBar from './componentes/NavBar'
import { Image } from 'react-bootstrap';
import logo from './assets/logo.png'
import Footers from './componentes/Footer';



function App() {


  return (
  <>
    <NavBar />
    <div className="logo">
      <Image src={logo} alt="logo" />
    </div>
    <MiApi />
    <Footers />
  </>

  )
}

export default App
