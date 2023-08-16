import React from 'react'
import userImg from '../assets/imgs/user.jpg'

const UserBar = () => {
    return (
        <div className='flex items-center max-[321px]:flex-col'>
            <img src={userImg} alt="user-icon" className='w-[50px] rounded-full mr-5 
                                                            max-[1023px]:mr-2 
                                                            max-[321px]:w-[40px] max-[321px]:mr-0'/>
            <h4 className='max-[321px]:text-sm max-[321px]:mt-1'>Name Name</h4>
        </div>
    )
}

export default UserBar