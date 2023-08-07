import React from 'react'
import userImg from '../assets/imgs/user.jpg'

const UserBar = () => {
    return (
        <div className='flex items-center'>
            <img src={userImg} alt="user-icon" className='w-[50px] rounded-full mr-5' />
            <h4>Name Name</h4>
        </div>
    )
}

export default UserBar