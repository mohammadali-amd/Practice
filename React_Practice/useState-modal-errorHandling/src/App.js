import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UserList/UsersList';


function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }

  return (
    <div id='app'>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
