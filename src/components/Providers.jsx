import React, { useState } from 'react';
import './Providers.css'; // Para estilos (opcional, lo creamos después)

const Providers = () => {
  const [providers, setProviders] = useState([]);
  const [newProvider, setNewProvider] = useState({
    name: '',
    contact: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setNewProvider({
      ...newProvider,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProvider = (e) => {
    e.preventDefault();
    if (!newProvider.name || !newProvider.phone) return;
    setProviders([...providers, newProvider]);
    setNewProvider({ name: '', contact: '', phone: '', address: '' });
  };

  return (
    <div className="provider-container">
      <h2>Gestión de Proveedores</h2>
      <form onSubmit={handleAddProvider} className="provider-form">
        <input type="text" name="name" placeholder="Nombre del proveedor" value={newProvider.name} onChange={handleChange} />
        <input type="text" name="contact" placeholder="Nombre de contacto" value={newProvider.contact} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Teléfono" value={newProvider.phone} onChange={handleChange} />
        <input type="text" name="address" placeholder="Dirección" value={newProvider.address} onChange={handleChange} />
        <button type="submit">Agregar proveedor</button>
      </form>

      <ul>
        {providers.map((prov, index) => (
          <li key={index}>
            {prov.name} - {prov.contact} - {prov.phone} - {prov.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Providers;
