'use client'
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const useAuth = () => {
    const {data:session} = useSession();
    const [user, setUser] = useState({})

    useEffect(() => {
        const getUser = async () => {
            const res = await fetch(`api/existsuser`, {
                method: "POST",
                headers: {
                    "Content-type":'application/json'
                },
                body : JSON.stringify({email:session?.user?.email})
            })
            const data = await res.json();
            console.log(data?.user);
            setUser(data?.user)
        };
        if(session?.user?.email) getUser();

    },[session?.user?.email])
    return {user}
};

export default useAuth;