import {Container as NavBarContainer} from './styled';
import Link from 'next/link'

const NavBar = ({}) => {
    

    return (
        <NavBarContainer>
            <Link href={`https://next-proyectofinal.vercel.app/`}><a>Inicio</a></Link>
            <Link href={`/recetario`}><a >Recetario</a></Link>
            <Link href={`/crearReceta`}><a >Aportar receta</a></Link>
        </NavBarContainer>
    )
}

export default NavBar