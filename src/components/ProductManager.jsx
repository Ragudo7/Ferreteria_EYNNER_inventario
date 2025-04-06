import React, { useState } from 'react';
import './ProductManager.css';

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: ''
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.stock) return;

    setProducts([...products, newProduct]);
    setNewProduct({ name: '', description: '', price: '', stock: '' });
  };

  return (
    <div className="product-container">
      <h2>Gestión de Productos</h2>

      <form onSubmit={handleAddProduct} className="product-form">
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          value={newProduct.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={newProduct.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={newProduct.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={handleChange}
        />
        <button type="submit">Agregar Producto</button>
      </form>

      <div className="product-list">
        <h3>Lista de productos</h3>
        {products.length === 0 ? (
          <p>No hay productos aún.</p>
        ) : (
          <ul>
            {products.map((p, i) => (
              <li key={i}>
                <strong>{p.name}</strong> - {p.description || 'Sin descripción'} - ${p.price} - Stock: {p.stock}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductManager;