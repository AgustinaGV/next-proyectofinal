import {Container as HomeContainer} from './styled'
import { Slider } from 'components'
import { Card } from 'components'

import Support from '../../images/support.svg'
import CrueltyFree from '../../images/cruelty-free.svg'
import Prepare from '../../images/prepare.svg'

const Home = ({children}) => {
    
    return (
        <HomeContainer>
            <Slider></Slider>
            <div className="cardsContainer">
                <Card titulo="Cruelty Free" parrafo="Buscando y proponiendo alternativas para que nuestras comidas estén libres de crueldad animal." src={CrueltyFree} alt="Cruelty Free"/>
                <Card titulo="Colaborativo" parrafo="Compartir, colaborar, cooperar entre todes." src={Support} alt="Colaborativo"/>
                <Card titulo="En casa" parrafo="Conocer el origen de nuestros alimentos. Poder comer algo rico, económico y responsable con el medioambiente hecho por vos" src={Prepare} alt="En casa"/>
            </div>
            {children}
        </HomeContainer>
    )
}

export default Home