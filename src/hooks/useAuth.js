import { useSession } from 'next-auth/react';

const useAuth = () => {
    const {data:session} = useSession();
    const user = session?.user;
    return {user}
};

export default useAuth;