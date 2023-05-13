import { render } from "react-dom";
import { Routes, Route, Router } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AccountPage from '../pages/AccountPage';
import UsersPage from '../pages/admin/UsersPage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from "../components/Layout";
import PrivateRoute from "./PrivateRoute";
import DashboardPage from "../pages/DashboardPage";
import ServicesPage from "../pages/ServicesPage";
import CategoriesPage from "../pages/CategoriesPage";
import AccesoriesPage from "../pages/accesoriesPage";
import InventoryPage from "../pages/InventoryPage";
import ContactsPage from "../pages/ContactsPage";
import ClientesPage from "../pages/admin/ClientesPage";
import CotizacionesPage from "../pages/admin/CotizacionesPage";

function AppRouter(){
    return( 
        <>

        <Layout>
         <Routes>
         
             <Route exact path='/' element={<HomePage/>} />
             <Route exact path='/login' element={<LoginPage/>} />
             <Route exact path='/register' element={<RegisterPage/>} />
             <Route exact path='/services' element={<ServicesPage/>} />
             <Route exact path='/dashboard' element={<PrivateRoute><DashboardPage/></PrivateRoute>} />
             <Route exact path='/clientes' element={<PrivateRoute><ClientesPage/></PrivateRoute>} />
             <Route exact path='/cotizaciones' element={<PrivateRoute><CotizacionesPage/></PrivateRoute>} />
             <Route exact path='/contabilidad' element={<PrivateRoute><ContactsPage/></PrivateRoute>} />
             <Route exact path='/contacts' element={<ContactsPage/>} />
             <Route  exact path='/account' element={
                 <PrivateRoute>
                     <AccountPage/>
                 </PrivateRoute>
             } />
             <Route exact path='/accesories' element={<AccesoriesPage/>}/>
             <Route exact path='/inventory' element={<PrivateRoute><InventoryPage/></PrivateRoute>} />
             <Route exact path='/categories' element={<CategoriesPage/>} />
             <Route exact path='/admin/users' element={<PrivateRoute><UsersPage/></PrivateRoute>} />
             <Route path='*' element={<NotFoundPage/>} />               
             </Routes> 
         </Layout>
        
        </>  
          );
}
export default AppRouter;
// realizaremos autenticacion de redes privadas con private route

// en esta pagina en si tratamos de resolver que pagina es publica o que pagina es privada
// para ello utilizamos la libreria react-router-dom con route y routes
// como podemos ver retornamos primero un layout entonces se aparecera la barra de navegacion  dinde preentara 
// las dierntes nombre de las paginas dependieno si es admin o cliente para ello 
// exportamos el privateRoute el cual hace que al yo dechara las paginas y so lo pongo dentro de un provate route 
// quiere decir que esa pagina solo esta dosponible si es admin caso contrario s no esta dentro de un 
//privateroute se presentara a todos 
