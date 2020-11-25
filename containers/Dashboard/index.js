import {Container as DashboardContainer} from './styled'
import { useProtected } from 'lib/useProtected'

const Dashboard = () => {

    const auth = useProtected();
    if (!auth.user) return null;
    console.log("holaaaaaaa");
    console.log(auth.user);

    return (
        <DashboardContainer>
            <h1>Dashboard</h1>
            <h2>¡Hola {auth.user.email}!</h2>
            <h2>A ver {auth.user.nombre}</h2>
            <h2>A ver 2 {auth.user.name}</h2>
        </DashboardContainer>
    )
}

export default Dashboard