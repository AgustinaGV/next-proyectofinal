import {Container as CardContainer} from './styled'


const Card = ({children, titulo, parrafo, src, alt}) => {

    return (


        <CardContainer>
            <div>
                <h4>{titulo}</h4>
                <img src={src} alt={alt}></img>
            </div>
            <p>{parrafo}</p>
        </CardContainer>
    )
}

export default Card