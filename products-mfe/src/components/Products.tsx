import React, { useState, useEffect } from 'react';
import './Products.css';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockProducts: Product[] = [
        {
          id: 1,
          name: "Laptop Pro",
          price: 1299.99,
          description: "High-performance laptop for professionals"
        },
        {
          id: 2,
          name: "Smartphone X",
          price: 899.99,
          description: "Latest smartphone with advanced features"
        },
        {
          id: 3,
          name: "Wireless Headphones",
          price: 249.99,
          description: "Premium noise-cancelling headphones"
        },
        {
          id: 4,
          name: "Smart Watch",
          price: 399.99,
          description: "Feature-rich smartwatch for health tracking"
        }
      ];
      
      setProducts(mockProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="products-loading">Loading products...</div>;
  }

  return (
    <div className="products-container">
      <h2 className="products-title">Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className="product-description">{product.description}</p>
            <button className="product-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;