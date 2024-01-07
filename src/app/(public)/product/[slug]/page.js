import SingleProduct from '@/components/singleProduct/SingleProduct';
import React from 'react';

const page = async ({params}) => {
    console.log(params.slug);
    const res = await fetch(`
    https://uminex-react-ecommerce-server.vercel.app/api/v1/product-by-slug/${params?.slug}`)
    const {product} = await res.json()
    console.log(product)
    return (
        <div>
           <SingleProduct product={product} />
        </div>
    );
};

export default page;