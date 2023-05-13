import Navigation from "./Navigation";


export default function Layout({children}){
    return (
        <>
            <Navigation/> 
            {children}
        </> // navigation es la barra de navegacion donde de encuentra el menu con las secciones
    );
}
//esta pagina nos sirve para llevar todos nuestros props hacia la navegacion una ves que 
// el usuario se logea le presentera diferentes componentes a diferenca de un usuario sin credenciales 
// a traves de los props que en este caso estan plasmados en el children