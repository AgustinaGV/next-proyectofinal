import {Container as SliderContainer} from './styled'
import Link from 'next/link'

import Receta from '../../images/receta.jpg'
import Receta1 from '../../images/receta1.jpg'
import Receta2 from '../../images/receta2.jpg'
import Receta3 from '../../images/receta3.jpg'
import Receta4 from '../../images/receta4.jpg'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Slider = ({children}) => {
    return (


        <SliderContainer>
            <h1> Recetario vegetariano y vegano</h1>
            <div>
                <AwesomeSlider bullets={false}>
                    <div data-src={Receta} alt="Recetas cruelty free" />
                    <div data-src={Receta1} alt="Recetas cruelty free" />
                    <div data-src={Receta2} alt="Recetas cruelty free" />
                    <div data-src={Receta3} alt="Recetas cruelty free" />
                    <div data-src={Receta4} alt="Recetas cruelty free" />
                </AwesomeSlider>
                <Link href={`/recetario`}><div className="divButton">Ver recetas</div></Link>
            </div>
        </SliderContainer>
    )
}

export default Slider