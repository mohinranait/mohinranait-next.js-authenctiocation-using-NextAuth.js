'use client';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';



const LoginForm = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('');
    const [error, setError] = useState('')
    const router = useRouter();
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn('credentials', {
                email, password, redirect: false,
            })

            if(res.error){
                setError("Credentials invalid");
                return ;
            }
            router.replace('dashboard')
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className='pb-5'>
                <form onSubmit={handleLogin} className="card-body">
                  
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} name='password' placeholder="password" className="input input-bordered" required />
                      
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Login</button>
                    </div>
                    {
                        error &&  <div className='py-2 px-5 rounded-sm bg-red-500'>{error}</div>
                    }
                   
                </form>   
                <p className='text-center'>Create a new account <Link href={'/register'} className='underline'>Register</Link> </p> 
            </div>  
        </>
    );
};

export default LoginForm;