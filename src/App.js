// src/App.js
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const editUser = (user) => {
    setUsers(users.map((u) => (u.email === user.email ? user : u)));
    setCurrentUser(null);
  };

  const deleteUser = (email) => {
    setUsers(users.filter((user) => user.email !== email));
  };

  const selectUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <div>
      <h1>CRUD de Usuarios</h1>
      <UserForm addUser={addUser} editUser={editUser} currentUser={currentUser} />
      <UserList users={users} deleteUser={deleteUser} selectUser={selectUser} />
    </div>
  );
};

export default App;

