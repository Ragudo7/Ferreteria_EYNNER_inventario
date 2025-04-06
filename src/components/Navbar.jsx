import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
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
    </nav>
  );
};

export default Navbar;
