import React from "react"
import { userForm } from "../hook/userForm"
import { useNavigate } from "react-router-dom";
import '/src/css/style.css';
import "/src/css/bootstrap.min.css";

export default function RegisterPage(){
    const navigate=useNavigate();

    //b utilizare el useform 

   const {name, email, password, onInputChange, onResetForm} = userForm({
    name:'',
    email:'',
    password:'',
   });

   const onRegister =(e)=>{
    e.preventDefault()

    navigate("/dashboard",{ // navegara a la ruta dashboard
    replace: true,
    state:{ // para poder otener el nombre y utilizarlo en el navbar , y con un atributo logged verifico si esta logeado
        logged:true, // con esto puedo comprovar para las rutas privadas
        name
    },
    });

    onResetForm(); // me permite resetear el formulario de logion o reguistro
};

// realizaremos el evento del sumit el cual sera el mismo en login y reguistro
// con e tomaremos el evento 


    return(

        <section class="form-02-main">
        <div class="container">
        <div class="col-md-12">
        <div class="_lk_de">
        <div class="form-03-main">
        <div class="logo">
              <img src="src/css/images/user.png"/>
        </div>
        <div class="titulo"><h1 class="h1">THE-ONE-COMPUTER</h1></div>
        <form onSubmit={onRegister}>
            <h1>REGISTRARSE</h1>
                <div class="form-group">
                    <input 
                    type="text"
                    class= "form-control _ge_de_ol"
                    name='name' 
                    id='name' 
                    value={name} 
                    onChange={onInputChange} 
                    required 
                    placeholder="Ingrese su nombre"
                    aria-required="true"
                    htmlFor="name"
                    autoComplete="off"/>
                </div>

                <div class="form-group">
                    <input 
                    type="email"  
                    name='email' 
                    id='email' 
                    class="form-control _ge_de_ol"
                    placeholder="Ingrese Correo"
                    value={email} 
                    onChange={onInputChange} 
                    required 
                    htmlFor="email"
                    aria-required="true"
                    autoComplete="off"/>
                    
                </div>

                <div class="form-group">
                    <input 
                    type="password"  
                    name='password' 
                    class="form-control _ge_de_ol"
                    id='password' 
                    placeholder="Ingrese Password"
                    value={password} 
                    onChange={onInputChange} 
                    required 
                    htmlFor="password"
                    aria-required="true"
                    autoComplete="off"/>
        
                </div>

                <div class="form-group">
              
               <button className="_btn_04">Registrarme</button>
              
              
            </div>

            <div><p>O Registrarse con: </p></div>
            <div class="form-group pt-0">
            <div class="_social_04">
                <ol>
                <li><i class="fa fa-facebook"></i></li>
                <li><i class="fa fa-twitter"></i></li>
                <li><i class="fa fa-google-plus"></i></li>
                <li><i class="fa fa-instagram"></i></li>
                <li><i class="fa fa-linkedin"></i></li>
                </ol>
            </div>
            </div>


            </form>
            </div>
        </div>
        </div>
        </div>
        </section>
    )
}