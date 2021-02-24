import styles from '../../../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Row from './Row';
import { useSession } from 'next-auth/client';
import Logged from './Logged';
import axios from 'axios';

const Main = () => {

    const [session, loading] = useSession();
    const [userLogged, setUserLogged] = useState(false);
    const [user, setUser] = useState(false);
    const [location, setLocation] = useState("login");


    useEffect(() => {

        const fetchSession = async () => {
            const res = await axios("http://localhost:3000/api/session");
            const { data } = res;

            if (data.status === 200) {
                setUserLogged(true); 
            }
            return true;
        }

        const fetchUser = async () =>{
            const insertUser = await axios.get("http://localhost:3000/api/user");
            const { data } = insertUser; 
            setUser(data);
          }
        fetchSession();
        fetchUser(); 
    }, [session]);

    if (typeof window !== 'undefined' && loading) {
        return null;
    }


    return (
        <main className={styles.main}>
            {
                userLogged ?
                    <Logged
                        user={user != undefined ? user : false}
                    /> : <Row
                        session={session} />
            }
        </main>
    )
}

export default Main;