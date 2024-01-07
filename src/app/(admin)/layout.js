import Link from 'next/link';
import React from 'react';

const AdminLayout = ({children}) => {
    return (
        <div>
            <div className='flex gap-3 items-center justify-center h-16 shadow-sm'>
                <Link href={'/admin/dashboard'} className='px-4 py-1 inline-block'>Dashboard</Link>
                <Link href={'/admin/products'} className='px-4 py-1 inline-block'>Products</Link>
                <Link href={'/admin/category'} className='px-4 py-1 inline-block'>Category</Link>
                <Link href={'/'} className='px-4 py-1 inline-block'>Home</Link>
            </div>
            {children}
        </div>
    );
};

export default AdminLayout;