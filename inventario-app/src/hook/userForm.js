import { useState } from "react";

export const userForm=(initialForm={})=>{ // aqui tomo un prop el cual mandare cuando use useform, que por defecto es un diccionario vacio
     // utilizamos useSte para poder cambiar el valor de initialForm
    const [formState, setFormState]=useState(initialForm);
    const onInputChange = ({target})=>{
        const {name, value}=target;
        setFormState({
            ...formState,
            [name]:value
        });
    }

    const onResetForm=()=>{
        setFormState(initialForm);
    }

    // aqui retorno el diccionario completo 
    return{
        ...formState, // aqui lo exparso con e operador , cosigueindo la estructura en los formularios 
        formState,
        onInputChange,
        onResetForm,
    } 

}

// en esta pagina creamos funciones para poder resetear el formulario tanto de loggin cono de reguister
// ahora si el usuario llena el formulario obtenemos esos datos y  cambiamos de estado en el login,  con ello tamien obteneoms su nombre 
// para poderlo presenta en el navegador