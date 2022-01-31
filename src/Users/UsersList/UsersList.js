import React, { useState } from 'react';
import Card from '../../UI/Card';
import classe from './UsersList.module.css'
const UsersList = (props) => {
   
  return (
    <Card className={classe.users}>
     <ul>
         {props.Users.map((user,index)=>(
         <li key={index}>
             {user.name} ({user.age} years Old)
         </li>
         )
         )

         }
     </ul>
    </Card>
  );
};

export default UsersList;
