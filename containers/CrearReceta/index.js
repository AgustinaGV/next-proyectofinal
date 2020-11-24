import {Container as RecetarioContainer} from './styled'
import { FormRecetas } from 'components'

import Support from '../../images/support.svg'

import { useAuth } from "lib/useUser";
import { useProtected } from "lib/useProtected";

const CrearReceta = ({children}) => {

    const auth = useProtected();
    
    if (!auth.user) return null;
    
    return (
        <RecetarioContainer>
            <FormRecetas />
        </RecetarioContainer>
        
    )
}

export default CrearReceta