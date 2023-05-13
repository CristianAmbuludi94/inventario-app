
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



export default function Navigation(){

    const{state}=useLocation() // con ello puedo cojer el nombre y ver el estado de logeed
    console.log(state);
    const navigate=useNavigate();


      // ahorac redireccionaremos el boton de cerrar cecion al inicio eliminando el usuario
    // onlogout hara que navege al login y que el replace sea true
    const onLogout=()=>{
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
                    <span className="username">Bienvenido : {state?.name}</span> 
                    <button className="btn-logout" onClick={onLogout}>Cerrar Sesion</button>
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
                        <Nav.Link as={NavLink} to="/register">Productos Y Accesorios</Nav.Link>
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