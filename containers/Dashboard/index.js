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
            <h2>Acá iría el nombre pero no funciona {auth.user.name} ¡!</h2>
        </DashboardContainer>
    )
}

export default Dashboard