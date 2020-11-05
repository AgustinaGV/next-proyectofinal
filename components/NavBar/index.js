import {Container as NavBarContainer} from './styled';
import Link from 'next/link'

const NavBar = ({}) => {
    

    return (
        <NavBarContainer>
            <Link href="http://localhost:3000/"><a href=''>Inicio</a></Link>
            <Link href="http://localhost:3000/"><a href=''>Recetario</a></Link>
            <Link href="http://localhost:3000/"><a href=''>Aportar receta</a></Link>
        </NavBarContainer>
    )
}

export default NavBar