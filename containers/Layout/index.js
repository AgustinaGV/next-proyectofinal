import { Main } from 'containers'
import { Header, Footer, NavBar } from 'components'

import {Container as LayoutContainer} from './styled'

const Layout = ({children}) => {
    return (
        <LayoutContainer>
            <Header />
            
            <Main>
                {children}
            </Main>

            <Footer />
        </LayoutContainer>
    )
}

export default Layout