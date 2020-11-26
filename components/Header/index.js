import Head from 'next/head'
import {Container as HeaderContainer} from './styled'
import Link from 'next/link'
import { useAuth } from 'lib/useUser';

import { NavBar } from 'components'

import Carrots from '../../images/carrots.svg'
import Cooking from '../../images/cooking.svg'
import CookingTime from '../../images/cooking-time.svg'
import Corn from '../../images/corn.svg'
import Eggplants from '../../images/eggplants.svg'
import Gear from '../../images/gear.svg'
import GreenPepper from '../../images/green-pepper.svg'
import Lettuce from '../../images/lettuce.svg'
import Onion from '../../images/onion.svg'
import Plate from '../../images/plate.svg'
import Preparation from '../../images/preparation.svg'
import Prepare from '../../images/prepare.svg'
import RecipeeBook from '../../images/recipe-book.svg'
import RecipeeBook1 from '../../images/recipe-book(1).svg'
import RecipeeBook2 from '../../images/recipe-book(2).svg'
import RecipeeBook3 from '../../images/recipe-book(3).svg'
import Veggie from '../../images/veggie.svg'
import CrueltyFree from '../../images/cruelty-free.svg'
import CrueltyFree1 from '../../images/cruelty-free(1).svg'

const Header = ({}) => {
    const auth = useAuth ();
    console.log('Mi user es ', auth.user)

    return (
        <div>
            <Head></Head>
            <HeaderContainer>
                <Link href={`https://next-proyectofinal.vercel.app/`} className="pointer">
                    <div className="logo">
                    <img src={RecipeeBook1} alt="logo"/>
                    <span>Recetario vegano y vegetariano</span>
                    </div>
                </Link>    
                <div>
                    <NavBar />
                </div>
                <div>
                {!auth.user ?
                (
                <>
                    <Link href={`/login`}><a >Iniciar sesión</a></Link>
                    <Link href={`/signup`}><a >Registrate</a></Link>
                </>
                ) : (
                    <>
                        <Link href={`/dashboard`}><a >Dashboard</a></Link>
                        <a onClick={() => auth.logout()}>Cerrar sesión</a>
                    </>
                )
            }
                </div>
            </HeaderContainer>
        </div>
    )
}

export default Header