import React from 'react'

const UserProfile = ({ params } : { params : {id: string }}) => {
    const { id } = params;

  return (
    <h1 className='text-3xl'>User Profile Details: {id}</h1>
  )
}

export default UserProfile