export default function NotFoundPage(){
    return(
     <div className="wrapper">
            <form onSubmit={onRegister}>
                <h1>REGISTRARSE</h1>
                <div className="input-group">
                    <input 
                    type="text"  
                    name='name' 
                    id='name' 
                    value={name} 
                    onChange={onInputChange} 
                    required 
                    autoComplete="off"/>
                    <label htmlFor="name">Nombre:</label>
                </div>

                <div className="input-group">
                    <input 
                    type="email"  
                    name='email' 
                    id='email' 
                    value={email} 
                    onChange={onInputChange} 
                    required 
                    autoComplete="off"/>
                    <label htmlFor="email">Email:</label>
                </div>

                <div className="input-group">
                    <input 
                    type="password"  
                    name='password' 
                    id='password' 
                    value={password} 
                    onChange={onInputChange} 
                    required 
                    autoComplete="off"/>
                    <label htmlFor="password">Contraseña:</label>
                </div>
                <button>Registrarme</button>
            </form>
          
        </div>
    )
}
