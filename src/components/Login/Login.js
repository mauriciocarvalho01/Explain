import styles from '../../../styles/Home.module.css';
import Row from './Row';
import { useSession } from 'next-auth/client';
import Logged from './Logged';

const Main = () => {
    const [session, loading] = useSession()

    return (
        <main className={styles.main}>
            {
                session ? <Logged /> : <Row />
            }
        </main>
    )
}

export default Main;