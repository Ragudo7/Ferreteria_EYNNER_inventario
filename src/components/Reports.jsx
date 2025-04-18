import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí podrías limpiar datos del usuario (localStorage, estados, etc.)
    // localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Ferretería EYNER</h1>
      <ul className="navbar-links">
        <li><Link to="/registro">Registro</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/proveedores">Proveedores</Link></li>
        <li><Link to="/inventario">Inventario</Link></li>
        <li><Link to="/ventas">Ventas</Link></li>
        <li><Link to="/configuracion">Configuración</Link></li>
        <li><Link to="/informes">Informes</Link></li>
      </ul>
      <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
    </nav>
  );
};

export default Navbar;

