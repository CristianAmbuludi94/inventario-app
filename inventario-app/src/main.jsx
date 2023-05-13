import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
  </BrowserRouter>
  </React.StrictMode>
  
)

// este es la pagina que suele llamarse index en este caso es main de aqui es donde parte el proyexto 
// al ejecutar o levantar react  o el servicio 
// como podemos ver ejecutamos la APP  la cual esta incluia con browserRoute y stric mode, lo cual 
// segun la domuntacion es recomendable trabajar con estos componentes para mejor dedilidad 

