import {Container as SignupContainer} from './styled'
import { FormSignUp } from 'components'

import Support from '../../images/support.svg'

const Signup = ({children}) => {
    
    return (
        <SignupContainer>
            <h1>Registrate</h1>
            <FormSignUp />
            {children}
        </SignupContainer>
    )
}

export default Signup