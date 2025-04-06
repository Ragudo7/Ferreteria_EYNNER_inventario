import React, { useState } from 'react';
import './Products.css'; // Asegúrate de tener este archivo con los estilos

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: ''
  });

  // Maneja los cambios en el formulario
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // Añade un producto a la lista
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

      <ul className="product-list">
        {products.map((prod, index) => (
          <li key={index}>
            <strong>{prod.name}</strong> - {prod.description} | 💲{prod.price} | 🧮 {prod.stock} unidades
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;