import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Puedes crear este archivo para estilos

const Register = () => {
  const navigate = useNavigate();

  // Estados del formulario
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    phone: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Manejar cambios en inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.password ||
      !formData.name ||
      !formData.email
    ) {
      setError('Por favor, complete todos los campos obligatorios.');
      return;
    }

    setError('');
    setSuccess(true);

    // Aquí podrías guardar en localStorage o enviarlo al backend
    console.log('Usuario registrado:', formData);

    setTimeout(() => navigate('/'), 2000); // Redirige al login después de 2 segundos
  };

  return (
    <div className="register-container">
      <h2>Crear nueva cuenta</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre completo:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Correo electrónico:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Teléfono:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <label>Nombre de usuario:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" className="btn">Registrar</button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">¡Registro exitoso! Redirigiendo...</p>}
      </form>

      <button className="btn" onClick={() => navigate('/')}>Volver al login</button>
    </div>
  );
};

export default Register;