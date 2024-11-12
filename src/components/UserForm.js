// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import '../styles/styles.css';

const UserForm = ({ addUser, editUser, currentUser }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      editUser(user);
    } else {
      addUser(user);
    }
    setUser({ name: '', email: '' });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        className="input"
        value={user.name}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input
        type="email"
        name="email"
        className="input"
        value={user.email}
        onChange={handleChange}
        placeholder="Correo electrónico"
      />
      <button className="button" type="submit">
        {currentUser ? 'Editar' : 'Registrar'}
      </button>
    </form>
  );
};

export default UserForm;
