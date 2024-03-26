import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './componentes/MiApi'
import NavBar from './componentes/NavBar'
import { Image } from 'react-bootstrap';
import logo from './assets/logo.png'
import Footers from './Footer';
import { useState } from 'react';


function App() {


  return (
  <>
    <NavBar />
    <Image src={logo} alt="logo" className='logo d-flex '/>
    <MiApi />

    <Footers />
  </>

  )
}

export default App
