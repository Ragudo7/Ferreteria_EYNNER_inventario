import React, { useState } from 'react';
import './Inventory.css';

const Inventory = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Martillo', stock: 10 },
    { id: 2, name: 'Destornillador', stock: 20 },
  ]);

  const [adjustment, setAdjustment] = useState({ id: '', amount: 0 });

  const handleChange = (e) => {
    setAdjustment({ ...adjustment, [e.target.name]: e.target.value });
  };

  const handleAdjustStock = (e) => {
    e.preventDefault();
    const updatedInventory = inventory.map((item) =>
      item.id === parseInt(adjustment.id)
        ? { ...item, stock: item.stock + parseInt(adjustment.amount) }
        : item
    );
    setInventory(updatedInventory);
    setAdjustment({ id: '', amount: 0 });
  };

  return (
    <div className="inventory-container">
      <h2>Inventario</h2>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>
            {item.name} - Stock actual: {item.stock}
          </li>
        ))}
      </ul>

      <form onSubmit={handleAdjustStock} className="inventory-form">
        <select name="id" value={adjustment.id} onChange={handleChange}>
          <option value="">Selecciona un producto</option>
          {inventory.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="amount"
          value={adjustment.amount}
          onChange={handleChange}
          placeholder="Cantidad (+ o -)"
        />
        <button type="submit">Actualizar stock</button>
      </form>
    </div>
  );
};

export default Inventory;