import Header from '@/shared/Header';
import React from 'react';


const PublicLayout = ({children}) => {
   
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default PublicLayout;