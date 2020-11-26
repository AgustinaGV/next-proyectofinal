import {Container as PaginaRecetaContainer} from './styled'

import Support from '../../images/support.svg'
import CrueltyFree from '../../images/cruelty-free.svg'
import Prepare from '../../images/prepare.svg'

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
            <h1>{props.titulo}</h1>
            <div>
                <div>Receta: {props.titulo}</div>
                <div>Descripción: {props.descripcion}</div>
                <div>Categoria: {props.categoria}</div>
                <div>Ingredientes: {props.ingredientes}</div>
                <div>Tiempo de preparación: {props.tiempoPreparacion}</div>
                <div>Tiempo de cocción: {props.tiempoCoccion}</div>
                <div>Rinde: {props.porciones} porciones</div>
                <div>Paso a paso: {props.pasos}</div>
            </div>
        </PaginaRecetaContainer>
    )
}

export default PaginaReceta