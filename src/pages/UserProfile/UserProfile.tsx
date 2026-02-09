import React from 'react'
import { useParams } from 'react-router'

const UserProfile = () => {
  const params = useParams();
  const userId = params.userId

  
  return (
    <div>Profile</div>
  )
}

export default UserProfile