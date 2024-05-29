import React, { useState } from 'react'

import { Navigate } from 'react-router-dom'

function Home() {
  const [user, setUser] = useState()

  if (!user) {
    return <Navigate to="/login" replace={true} />
  }

  return (
    <>
      <div>Home</div>
    </>
  )
}

export default Home
