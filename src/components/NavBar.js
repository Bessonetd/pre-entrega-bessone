import LogoCarrito from "./CartWidget"
const NavBar = ()=> {
    return(
        <nav class="nav">
            <ul>
                <li >
                    <a href="">Inicio</a>
                </li>
                <li >
                    <a href="">Producto</a>
                </li>
                <li >
                    <a href="">Carrito</a>
                </li>
            </ul>
            <h1>Enter Hilos y Pinceles</h1>
            <LogoCarrito/>
        </nav>
    )
}
export default NavBar