import {Container as NavBarContainer} from './styled';
import Link from 'next/link'

const NavBar = ({}) => {
    

    return (
        <NavBarContainer>
            <Link href="http://localhost:3000/"><a>Inicio</a></Link>
            <Link href="https://www.google.com/"><a >Recetario</a></Link>
            <Link href={`/crearReceta`}><a >Aportar receta</a></Link>
        </NavBarContainer>
    )
}

export default NavBar