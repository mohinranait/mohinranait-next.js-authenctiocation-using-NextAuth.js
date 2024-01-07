'use client'
import useAuth from '@/hooks/useAuth';
import { signOut } from 'next-auth/react';
import React from 'react';

const UserDashbaord = () => {
   const {user} = useAuth();
   console.log(user);
    return (
        <div>
            <div>
                <p>Name: {user?.name}</p>
                <p>Email: {user?.email}</p>
                <div onClick={ () => signOut() } className='bg-red-500 text-white py-2 inline-block px-5 cursor-pointer'>Singout</div>
            </div>
        </div>
    );
};

export default UserDashbaord;