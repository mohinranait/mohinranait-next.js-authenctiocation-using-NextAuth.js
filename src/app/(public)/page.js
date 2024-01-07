import ProductCard from '@/components/productCard/ProductCard';
import Image from 'next/image';
import React from 'react';

const HomePage = async () => {

    // products API
    const res = await fetch(`https://uminex-react-ecommerce-server.vercel.app/api/v1/products`);
    const products = await res.json()

    // Slider 
    const sliderRes = await fetch(`https://uminex-react-ecommerce-server.vercel.app/api/v1/all-banners?request=user`);
    const {banners} = await sliderRes.json();


    return (
        <>
            <div className='container'>
                <div className="carousel w-full h-[250px]">
                    {
                        banners?.map((banner,index) =>   <div key={index} id="slide1" className="carousel-item relative w-full">
                        <Image src={banner?.image} className="w-full" alt="image" width="100" height="200" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={`#slide${banners?.length}`} className="btn btn-circle">❮</a> 
                        <a href={`#slide${index + 1}`} className="btn btn-circle">❯</a>
                        </div>
                    </div>  )
                    }
                  
                </div>
            </div>

            <section>
                <div className='container'>
                    <div>
                        <p className='text-3xl font-bold text-center pt-16 pb-5'>Products ({products?.products?.length})</p>
                    </div>
                    <div className='grid grid-cols-4 gap-6'>
                        {
                            products?.products?.map(product =>  <ProductCard key={product?._id} product={product} /> )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;