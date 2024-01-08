'use client'
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userError, userRequest, userSuccess } from './features/auth/authSlice';

const AnotherProvider = ({children}) => {
    const {data:session} = useSession();
    const dispatch = useDispatch()
    useEffect(() => {
        const getUser = async () => {
            dispatch(userRequest())
            try {
                const res = await fetch(`api/existsuser`, {
                    method: "POST",
                    headers: {
                        "Content-type":'application/json'
                    },
                    body : JSON.stringify({email:session?.user?.email})
                })
                const data = await res.json();
                dispatch(userSuccess(data?.user))
                console.log(data?.user);
            } catch (error) {
                dispatch(userError(error.message))
            }
        };
        if(session?.user?.email) getUser();
    },[session])
    return (
        <>
            {children}
        </>
    );
};

export default AnotherProvider;