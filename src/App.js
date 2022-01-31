import React from 'react';
import UserForm from './Users/AddUser/UserForm';
import UsersList from './Users/UsersList/UsersList';


function App() {
  return (
    <div>
      <UserForm/>
      <UsersList Users={[]}/>
    </div>
  );
}

export default App;
