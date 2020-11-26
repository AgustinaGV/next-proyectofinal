import {Container as CardContainer} from './styled'
import Link from 'next/link';


const CardReceta = ({children, titulo, parrafo, src, alt, href}) => {

    return (


        <CardContainer>
            
            <div>
                <img src={src} alt={alt}></img>
                <h4>{titulo}</h4>
            </div>
            <p>{parrafo}</p>
            <Link href={href}>
                <div className="botonForm">Ver más</div>
            </Link>
            
        </CardContainer>
    )
}

export default CardReceta