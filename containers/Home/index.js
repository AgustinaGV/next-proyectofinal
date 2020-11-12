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
                <Card titulo="Cruelty Free" parrafo="Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam, vitae sodales diam ipsum vitae purus." src={CrueltyFree} alt="Cruelty Free"/>
                <Card titulo="Colaborativo" parrafo="Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam, vitae sodales diam ipsum vitae purus." src={Support} alt="Colaborativo"/>
                <Card titulo="En casa" parrafo="Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam, vitae sodales diam ipsum vitae purus." src={Prepare} alt="En casa"/>
            </div>
            {children}
        </HomeContainer>
    )
}

export default Home