import React, { useState } from 'react';
import './Reports.css';

const Reports = () => {
  // Simulaciones de ejemplo, más adelante se puede conectar a BD
  const [sales] = useState([
    { id: 1, product: 'Martillo', quantity: 2, price: 15 },
    { id: 2, product: 'Taladro', quantity: 1, price: 120 },
    { id: 3, product: 'Destornillador', quantity: 3, price: 8 }
  ]);

  const [inventory] = useState([
    { id: 1, product: 'Martillo', stock: 8 },
    { id: 2, product: 'Destornillador', stock: 17 },
    { id: 3, product: 'Taladro', stock: 4 }
  ]);

  const totalIncome = sales.reduce((acc, s) => acc + s.quantity * s.price, 0);

  return (
    <div className="reports-container">
      <h2>📊 Informes</h2>

      <section>
        <h3>Ingresos Totales</h3>
        <p>S/ {totalIncome}</p>
      </section>

      <section>
        <h3>Ventas Realizadas</h3>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((s) => (
              <tr key={s.id}>
                <td>{s.product}</td>
                <td>{s.quantity}</td>
                <td>S/ {s.price}</td>
                <td>S/ {s.quantity * s.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3>Estado del Inventario</h3>
        <ul>
          {inventory.map((item) => (
            <li key={item.id}>
              {item.product} - Stock disponible: {item.stock}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Reports;
