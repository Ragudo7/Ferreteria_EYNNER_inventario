import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Importar navegación
import './Login.css';

const Login = () => {
  const navigate = useNavigate(); // 👈 Inicializar navegación
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const users = [
    { username: 'admin', password: '1234' },
    { username: 'eyner', password: 'abcd' }
  ];

  const handleLogin = () => {
    const userFound = users.find(
      (u) => u.username === username && u.password === password
    );

    if (userFound) {
      setError('');
      navigate('/dashboard'); // 👈 Redirigir al panel principal
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img src="/logo.png" alt="Logo Ferretería EYNER" className="logo" />
        <h1>Ferretería <span className="eyner">EYNER</span></h1>
      </div>

      <div className="login-form">
        <label>Usuario:</label>
        <input
          type="text"
          placeholder="Ingrese su usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Contraseña:</label>
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn main" onClick={handleLogin}>
          Entrar
        </button>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className="button-row">
          <button className="btn" onClick={() => navigate('/register')}>Crear cuenta</button>
          <button className="btn">Cambiar contraseña</button>
        </div>
      </div>

      <p className="contact">
        Si presenta algún inconveniente, escriba a <strong>ferreteria.EYNER@gmail.com</strong><br />
        o llame al contacto <strong>3040000000</strong>
      </p>
    </div>
  );
};

export default Login;