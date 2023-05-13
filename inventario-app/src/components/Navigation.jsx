import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {NavLink, Outlet, Routes, useLocation, useNavigate} from 'react-router-dom';
import '/src/css/style.css';


export default function Navigation(){

    const{state}=useLocation() // con ello puedo cojer el nombre y ver el estado de logeed
    console.log(state); // imprimo aqui para ver cuando esta en null y como transita cuando me logeo con los datos
    const navigate=useNavigate(); // utilizo el objeto navigate para redirigirme auna ruta determinada dependiendo del estado de logged


      // ahorac redireccionaremos el boton de cerrar cecion al inicio eliminando el usuario
    // onlogout hara que navege al login y que el replace sea true
    const onLogout=()=>{ // cuando cerramos cesion cambiamos de estado para bloquear las paginas del admin
        navigate('/login',{
            replace:true,
        })
    }


    return (
        <>
        <header>
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" fixed='top'>
            <Navbar.Brand  as={NavLink} to="/">Gestor de Inventario TOC</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            
            {state?.logged ? (
                <Navbar.Collapse id="responsive-navbar-nar">
                    <Nav className='me-auto'>
                    
                    <label className='centrado'>Bienvenido : {state?.name}</label> 
                    
                    <Nav.Link  as={NavLink} to="/categories">Categorias de Productos</Nav.Link>
                    <Nav.Link as={NavLink} to="/account">Mi  Cuenta</Nav.Link>
                    <NavDropdown title="Admin">
                    <NavDropdown.Item as={NavLink} to="/admin/users">Usuarios</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/accesories">Productos y Accesorios</Nav.Link>
                        <Nav.Link as={NavLink} to="/inventory">Inventario</Nav.Link>
                        <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                    <NavDropdown title="Clientes">
                    <NavDropdown.Item as={NavLink} to="/admin/clientes">Clientes</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/admin/cotizaciones">cotizaciones</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/admin/contabilidad">Contabilidad</NavDropdown.Item>
                    </NavDropdown>
                    <button className="btn-logout" onClick={onLogout}>Cerrar Sesion</button>
                    </Nav>
                </Navbar.Collapse>
            ) : (
                
                <Navbar.Collapse id="responsive-navbar-nar">
                    <Nav className='me-auto'>
                    <Nav.Link  as={NavLink} to="/categories">Categorias de Productos</Nav.Link>
                    <Nav.Link as={NavLink} to="/services">Servicios TOC</Nav.Link>
                    <Nav.Link as={NavLink} to="/accesories">Accesorios y Productos</Nav.Link>
                    <Nav.Link as={NavLink} to="/">HOME</Nav.Link>

                    </Nav>
                    <Nav>

                        <Nav.Link as={NavLink} to="/contacts">Contactanos</Nav.Link>
                        <Nav.Link as={NavLink} to="/register">Registrarse</Nav.Link>
                        <Nav.Link as={NavLink} to="/login">Iniciar Sesion</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            )}

        </Navbar>
        </header>
        <div>...</div>
        <Outlet></Outlet>
        </>
    )
}
//collspeOn  es para configurarlo cuando se muestre el menu para dospositivos grandes o celular
// ademas con el expand y bg varian  es la forma de definir el estilo caracteristico de un componente 
// navar.brand para resartar dentro el menor tiempo posible en version pc 
// toggle, para version movil toda esta configuraciones realizo para que aparezca el boto de men y desaparecade acuerdo al tamaño de la pagina
// no es recomndable utilizar id porque en react son reautilizable estos componentees y puede haber conflico pero ene stecaso solo se utilizara una ves 
// mr  autho para separar   nuestro margen , y etc 
// agrupamos en un navdropdown  con la finalidad de tener una lista deplegable, en rutas de administrador
// to es para redirigirnos a la ruta que queramos 
//as es para renderizar para que se puede utilizar como un boton como un div etc y no se rompera los estulos 


// en esta pagina creamos con NAVBAR una navegacion con paginas que se presentaran de acuerdo al estado de login
// en si se utilizo solo estilos ocn la finalidad que sea responsible y  contectamos con un if para ello 
// obtenemos atraves del useLokation el estado actual del usuario una ves obtenido el estado verificamos con una 
// if el state entonces si es admin se presentara ese listado caso contrario se presentrara un listado para clientes