import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client'
import Sidebar from '../../../components/Sidebar/Sidebar'
import MainPanel from '../../../components/MainPanel/MainPanel'
import Redirect from '../../../utils/Redirect'


function UserProfile () {
  const [session, loading] = useSession()
  const [user, setUser] = useState()
  const [location] = useState('profile')


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/user')
      const json = await res.json()

      if (json.status) {
        setUser(json.user)
      }
    }
    fetchData()
  }, [session])

  if (typeof window !== 'undefined' && loading) {
    return null
  }

  if (!session) {
    return <Redirect to='/login' />
  }

  return (
    <div className='wrapper'>
      <Sidebar
        local={location}
      />
      <MainPanel
        user={user != null ? user : false}
        local={location}
      />
    </div>
  )
}

export default UserProfile
