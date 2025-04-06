import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [config, setConfig] = useState({
    businessName: 'Ferretería EYNER',
    currency: 'PEN',
    theme: 'claro'
  });

  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Configuración guardada correctamente');
    // Aquí más adelante se podría guardar en base de datos o archivo local
  };

  return (
    <div className="settings-container">
      <h2>Configuración</h2>
      <form onSubmit={handleSubmit} className="settings-form">
        <label>Nombre del Negocio:</label>
        <input
          type="text"
          name="businessName"
          value={config.businessName}
          onChange={handleChange}
        />

        <label>Moneda:</label>
        <select name="currency" value={config.currency} onChange={handleChange}>
          <option value="PEN">Soles (PEN)</option>
          <option value="USD">Dólares (USD)</option>
          <option value="EUR">Euros (EUR)</option>
        </select>

        <label>Tema:</label>
        <select name="theme" value={config.theme} onChange={handleChange}>
          <option value="claro">Claro</option>
          <option value="oscuro">Oscuro</option>
        </select>

        <button type="submit">Guardar configuración</button>
      </form>
    </div>
  );
};

export default Settings;
