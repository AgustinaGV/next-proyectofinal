import {Container as RecetarioContainer} from './styled'
import { Card } from 'components'

import Support from '../../images/support.svg'

const Recetario = ({children}) => {
    
    return (
        <RecetarioContainer>
            <h1>Recetario</h1>
            {children}
        </RecetarioContainer>
    )
}

export default Recetario