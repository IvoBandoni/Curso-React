import IconExampleDisabled from "./CartWidget"


const NavBar = () => {
    return(
        <nav>
            <h1 class="main-header__title">PlayPelis</h1>
            <nav className="navegacion">
        <ul className="nav__lista">
            <li class="nav__item"><a href="i" class="nav__link">Inicio</a></li>
            <li class="nav__item"><a href="a" class="nav__link">Accion</a></li>
            <li class="nav__item"><a href="av" class="nav__link">Aventura</a></li>
            <li class="nav__item"><a href="b" class="nav__link">Bélico</a></li>
            <li class="nav__item"><a href="d" class="nav__link">Drama</a></li>
            <li class="nav__item"><a href="c" class="nav__link">Comedia</a></li>
            <li class="nav__item"><a href="t" class="nav__link">Terror</a></li>
            <IconExampleDisabled />
        </ul>
    </nav>
        </nav>
    )
}

export default NavBar;