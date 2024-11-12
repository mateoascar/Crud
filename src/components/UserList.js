// src/components/UserList.js
import React from 'react';
import '../styles/styles.css';

const UserList = ({ users, deleteUser, selectUser }) => {
  return (
    <ul className="list">
      {users.map((user) => (
        <li className="list-item" key={user.email}>
          {user.name} - {user.email}
          <div>
            <button className="edit-button" onClick={() => selectUser(user)}>
              Editar
            </button>
            <button className="delete-button" onClick={() => deleteUser(user.email)}>
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
