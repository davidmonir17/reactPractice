import React, { useState } from 'react';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import classes from './UserForm.module.css'
const UserForm = (props) => {
    const[enterdName,setEntredName]=useState('');
    const[enterdAge,setEntredAge]=useState('');
    
    const NameHadler=(event)=>{
        setEntredName(event.target.value);
    }

    const AgeHadler=(event)=>{
       
        setEntredAge(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        if(enterdAge<=0)
        {
            return;
        }else if(enterdName.trim().length===0||enterdAge<=0)
        {
           return;
        }
        else{
        console.log(enterdName);
        console.log(enterdAge);
        setEntredAge('');
        setEntredName('');
        }
    }
  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler} className='new-expense'>
         
           
                    <label>User Name</label>
                    <input type='text'
                    value={enterdName}
                    onChange={NameHadler}
                    />
                
               
                    <label>Age</label>
                    <input type='number'
                    value={enterdAge}
                    onChange={AgeHadler}
                    />
                
            <Button type='submit'>Add User</Button>
                        
           
           
      </form>
    </Card>
  );
};

export default UserForm;
