import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import LoginForm from '@/components/loginForm/LoginForm';
import useAuth from '@/hooks/useAuth';
import { getServerSession } from 'next-auth';
import { redirect} from 'next/navigation';
import React from 'react';

const LoginPage = async () => {
    const session = await getServerSession(authOptions)
    if(session) redirect('/dashboard')
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;