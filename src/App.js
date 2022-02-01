import React, { useState } from 'react';
import UserForm from './Users/AddUser/UserForm';
import UsersList from './Users/UsersList/UsersList';


function App() {
  const [enteredUsers,SetEntredUser]=useState([]);
  const [visibality,setvisibality]=useState(false);
  const AddUserHandler=(userX)=>{
      SetEntredUser([...enteredUsers,userX]);
      setvisibality(true);
   
  }
  return (
    <div>
      <UserForm sendUser={AddUserHandler}/>
     {visibality&& <UsersList Users={enteredUsers}/>}
     {/* <UsersList Users={[]}/> */}
    </div>
  );
}

export default App;
