// import { Route } from "react-router-dom";

import {Navigate, useLocation } from "react-router-dom"
import App from "../App";

// export default function PrivateRoute(props){
//     return(
//       <Route {...props}/>
//     )
// }

export const PrivateRoute=({children})=>{



const {state}=useLocation()
return state?.logged ? children : <Navigate to="/login"/>;
}
export default PrivateRoute;

// pra que se pueda renderizar las rutar de esta forma debemos poner comoprops los expo, path, component  
// entonces para que la funcionalizad este identica, los parametros se les pase a privateroute y de ahi a la ruta
// en esta pagina hacemos un control de las paginas si son publicas o privadas a traves de una condicion como podemos ver en el codigo
// como vemos usamos el useLocation para saber en que estadp esta el state y verificamos ocn un  if si no es admin 
// si no es admin siempre me redirigira al login haga o teclee de donde sea ya que primero hay q logearse 
