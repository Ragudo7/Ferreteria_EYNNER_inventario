import React, { useState } from 'react';
import './SalesCatalog.css';

const SalesCatalog = () => {
  // Lista de productos de ejemplo
  const [products] = useState([
    { id: 1, name: 'Martillo', price: 15 },
    { id: 2, name: 'Destornillador', price: 8 },
    { id: 3, name: 'Taladro', price: 120 }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  return (
    <div className="sales-catalog-container">
      <h2>Catálogo de Ventas</h2>
      <div className="product-list">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <h4>{p.name}</h4>
            <p>Precio: S/ {p.price}</p>
            <button onClick={() => addToCart(p)}>Agregar al carrito</button>
          </div>
        ))}
      </div>

      <h3>🛒 Carrito</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.qty} - S/ {item.price * item.qty}
          </li>
        ))}
      </ul>
      <h4>Total: S/ {getTotal()}</h4>
    </div>
  );
};

export default SalesCatalog;
