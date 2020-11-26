import {Container as PaginaRecetaContainer} from './styled'


import RecipeBook from '../../images/recipe-book.svg'
import Plate from '../../images/plate.svg'
import CookingTime from '../../images/preparation.svg'
import Prepare from '../../images/prepare.svg'
import Carrots from '../../images/carrots.svg'

const PaginaReceta = ({props}) => {

    const {
        titulo, 
        descripcion, 
        categoria, 
        ingredientes, 
        tiempoPreparacion, 
        tiempoCoccion, 
        porciones, 
        pasos,
    } = props;
    
    return (
        <PaginaRecetaContainer>
            <div>
                <div className="tituloReceta">
                    <h1>{props.titulo}</h1>
                    <img src={RecipeBook} alt={RecipeBook}/>
                </div>
                <div>
                    <span className="subtitulos">Categoría </span>
                    <p>{props.categoria}</p>
                </div>
            </div>

            <div>
                <span className="subtitulos">Descripción </span>
                <p>{props.descripcion}</p>
            </div>

            <div>
                <div>
                    <div className="subtituloConIcono">
                        <span className="subtitulos">Tiempo de preparación </span>
                        <img src={CookingTime} alt={CookingTime} className="iconos"/>
                    </div>
                    <p>{props.tiempoPreparacion}</p>
                </div>
                <div>
                    <div className="subtituloConIcono">
                        <span className="subtitulos">Tiempo de cocción </span>
                        <img src={CookingTime} alt={CookingTime} className="iconos"/>
                    </div>
                    <p>{props.tiempoCoccion}</p>
                </div>
                <div>
                    <div className="subtituloConIcono">
                        <span className="subtitulos">Rinde </span>
                        <img src={Plate} alt={Plate} className="iconos"/>
                    </div>
                    <p>{props.porciones}</p>
                </div>
            </div>

            <div>
                <div className="subtituloConIcono">
                    <span className="subtitulos">Ingredientes </span>
                    <img src={Carrots} alt={Carrots} className="iconos"/> 
                </div>
                <p>{props.ingredientes}</p>
            </div>
            <div>
                <div className="subtituloConIcono">
                    <span className="subtitulos">Paso a paso</span>
                    <img src={Prepare} alt={Prepare} className="iconos"/>
                </div>
                <p>{props.pasos}</p>
            </div>

            <div className="botonForm">Agregar a mis recetas favoritas</div>
        </PaginaRecetaContainer>
    )
}

export default PaginaReceta