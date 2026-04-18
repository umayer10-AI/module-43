import Image from 'next/image';
import React from 'react';

const ProductCarts = ({p}) => {
    return (
        <div className="border rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300">

      <div className="w-full h-48 relative">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div className="mt-4 space-y-2">
        <h2 className="text-lg font-bold">{p.name}</h2>

        <p className="text-gray-500 text-sm">{p.category}</p>

        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-green-600">
            ${p.price}
          </span>

          <span className="text-yellow-500">
            ⭐ {p.rating}
          </span>
        </div>

        <p className="text-sm text-gray-500">
          Stock: {p.stock}
        </p>

        <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
    );
};

export default ProductCarts;