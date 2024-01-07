'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const SingleProduct = ({product}) => {
    const router = useRouter()
    return (
        <>
            <div className='container'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">{product?.name}</h1>
                            <p className="py-6"> <span className='font-semibold'>Brand : </span> {product?.brand?.name}</p>
                            <button className="btn btn-primary" onClick={() => router.back()}>Go Back</button>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default SingleProduct;