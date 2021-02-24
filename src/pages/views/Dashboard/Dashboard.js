import React, { useState, useEffect } from "react";
import { useSession } from 'next-auth/client';
import Sidebar from '../../../components/Sidebar/Sidebar';
import MainPanel from '../../../components/MainPanel/MainPanel';
import Redirect from '../../../utils/Redirect';
import axios from 'axios';

function Dashboard() {

  const [session, loading] = useSession();
  const [user, setUser] = useState({});
  const [messageWelcome, setMessageWelcome] = useState('');
  const [location, setLocation] = useState("dashboard");


  useEffect(() => {
    const fetchSession = async () => {
      const res = await axios.get("http://localhost:3000/api/session");
      const { data } = res;

      if (data.status === 200) {
        setMessageWelcome(data != undefined ? data.message : "Olá, bem vindo ao Explain!");
      }
      return data;
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

  if (!session) {
    return <Redirect to="/login" />
  }

  return (
    < div className="wrapper" >
      <Sidebar
        local={location}
      />
      <MainPanel
        user={user != undefined ? user : false}
        message={messageWelcome != undefined ? messageWelcome : false}
        local={location}
      />
    </div >
  );
}

export default Dashboard;





