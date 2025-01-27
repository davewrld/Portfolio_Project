import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '@/utils/api';

const ListPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (name) {
      const fetchProducts = async () => {
        try {
          const response = await api.get(`/products?name=${name}`);
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      fetchProducts();
    }
  }, [name]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Search Results for {name}</h1>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="p-4 border rounded-md">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListPage;