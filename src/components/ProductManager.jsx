// src/components/ProductManager.jsx

import React, { useState } from 'react';
import './ProductManager.css';

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState('');

  const handleAddProduct = () => {
    if (newProduct.trim() !== '') {
      setProducts([...products, newProduct]);
      setNewProduct('');
    }
  };

  return (
    <div className="product-manager">
      <h2>Gestión de Productos</h2>
      <input
        type="text"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
        placeholder="Nombre del producto"
      />
      <button onClick={handleAddProduct}>Agregar</button>

      <ul>
        {products.map((prod, index) => (
          <li key={index}>{prod}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManager;