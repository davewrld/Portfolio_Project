"use client"

import { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import api from '@/utils/api';

const SinglePage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchProduct = async () => {
        try {
          const response = await api.get(`/products/${slug}`);
          setProduct(response.data);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };

      fetchProduct();
    }
  }, [slug]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl">{product.description}</p>
      <p className="text-2xl font-semibold">${product.price}</p>
    </div>
  );
};

export default SinglePage;