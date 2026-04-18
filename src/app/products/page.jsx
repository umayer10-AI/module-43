import ProductCarts from '@/component/ProductCarts';
import React from 'react';

const getPosts = async () => {
    // const res = await fetch("http://localhost:5000/products",{cache: "force-cache"})
    // const res = await fetch("http://localhost:5000/products",{cache: "no-store"})
    const res = await fetch("http://localhost:5000/products",{next: {revalidate: 10}})
    return await res.json()
}

const page = async () => {

    const data = await getPosts()
    console.log(data)

    return (
        <div className='w-[80%] mx-auto'>
            <h2 className='text-2xl font-bold text-center'>Products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    data.map(v => <ProductCarts key={v.id} p={v}></ProductCarts>)
                }
            </div>
        </div>
    );
};

export default page;