import React from 'react'
import { Fragment } from 'react'


const UserCard = ({ user }) => {
    return (
        <Fragment>
            <div className='bg-white p-4 shadow-lg rounded-lg mb-2'>
                <h3 className='text-xl font-semibold'>Full Name: {user.fullName}</h3>
                <p>Age: {user.age}</p>
                <p>Occupation: {user.occupation}</p>
            </div>
        </Fragment>
    )
}

export default UserCard