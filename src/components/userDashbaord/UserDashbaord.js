'use client'
import useAuth from '@/hooks/useAuth';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const UserDashbaord = () => {
    const router = useRouter();
    const {user} = useAuth();
    if(user?._id && user?.role !== 'admin') {
        router.push('/user')
    }
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