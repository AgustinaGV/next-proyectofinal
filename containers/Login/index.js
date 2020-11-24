import {Container as LoginContainer} from './styled'
import { FormLogin } from 'components'

import Support from '../../images/support.svg'

const Login = ({children}) => {
    
    return (
        <LoginContainer>
            <h1>Iniciá sesión</h1>
            <FormLogin />
            {children}
        </LoginContainer>
    )
}

export default Login