import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Providers from './components/Providers';
import Inventory from './components/Inventory';
import Settings from './components/Settings';
import Sales from './components/sales';
import Reports from './components/Reports';
import ProductManager from './components/ProductManager';
import SalesCatalog from './components/SalesCatalog';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const hideNavbarPaths = ['/']; // Rutas donde no se muestra el Navbar (como login)
  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/proveedores" element={<Providers />} />
        <Route path="/inventario" element={<Inventory />} />
        <Route path="/configuracion" element={<Settings />} />
        <Route path="/ventas" element={<Sales />} />
        <Route path="/informes" element={<Reports />} />
        <Route path="/product-manager" element={<ProductManager />} />
        <Route path="/catalogo-ventas" element={<SalesCatalog />} />
      </Routes>
    </>
  );
}

export default App;