'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const RegisterForm = () => {
    const router= useRouter();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault();

        const userObj = {name,email, password};
        try {
           
            const res = await fetch(`api/register`, {
                method : "POST",
                headers: {
                    "Content-type":"application/json"
                },
                body: JSON.stringify(userObj)
            });
            const data = await res.json();
            if(data?.isExists){
                setError("User already exists");
            }
            if(data?.success){
                const form = e.target;
                form.reset();
                setError("")
                router.push('/login')
            }else{
                console.log("User register failed");
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
            <div className='pb-5'>
               
                <form onSubmit={handleRegister} className="card-body">
                    {
                        error &&  <div className='bg-red-500 py-1 px-3 rounded text-white '>
                        <p>{error}</p>
                    </div>
                    }
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' onChange={(e) => setName(e.target.value)} placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
                      
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Register</button>
                    </div>
                </form>   
                <p className='text-center'>Already have an account <Link href={'/login'} className='underline'>Login</Link> </p> 
        </div>
    );
};

export default RegisterForm;