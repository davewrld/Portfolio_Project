"use client";

import { useEffect, useState } from 'react';
import api from '@/utils/api';

const ProductList = ({ products }) => {

  useEffect(() => {
    if (!products) {
      const fetchProducts = async () => {
        try {
          const response = await api.get('/products');
          setFetchedProducts(response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      fetchProducts();
    }
  }, [products]);

  const displayProducts = products || fetchedProducts;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {displayProducts.map(product => (
        <div key={product.id} className="p-4 border rounded-md">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;