'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const ProductCard = ({product}) => {
    const [color, setColor] = useState(product && product?.productFeatures?.keyFeatures?.colors[0]?.label);

    const handleAddToCart = async () => {
        console.log(product?._id, color);
    }
    return (
        <>
            <div className="card card-compact  bg-base-100 shadow">
                <figure><Image width={1000} height={100} src={product?.media?.images[0]} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product?.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link href={`/product/${product?.slug}`} className="btn btn-sm btn-primary">Buy Now</Link>
                        <button onClick={() => handleAddToCart()} className="btn btn-sm btn-secondary">Add to cart</button>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default ProductCard;