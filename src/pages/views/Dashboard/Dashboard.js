import React, { useState, useEffect } from "react";
import { useSession } from 'next-auth/client';
import Sidebar from '../../../components/Sidebar/Sidebar';
import MainPanel from '../../../components/MainPanel/MainPanel';
import Redirect from '../../../utils/Redirect'; 


function Dashboard() {

  const [session, loading] = useSession();
  const [user, setUser] = useState();
  const [location, setLocation] = useState("dashboard");



  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/session");
      const json = await res.json();

      if (json.content) {
        setUser(json.content);
      }
    }
    fetchData();
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
      local = {location}
      />
      <MainPanel
        user={user != null ? user : false}
        local={location}
      />
    </div >
  );
}

export default Dashboard;





