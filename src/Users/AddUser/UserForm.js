import React, { useState } from 'react';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import ErrorModel from '../../UI/ErrorModel';
import classes from './UserForm.module.css'
const UserForm = (props) => {
    const[enterdName,setEntredName]=useState('');
    const[enterdAge,setEntredAge]=useState('');
    const [show,SetShow]=useState(false);
    const [err,SetEror]=useState();
    
    const NameHadler=(event)=>{
        setEntredName(event.target.value);
    }

    const AgeHadler=(event)=>{
       
        setEntredAge(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();
         if(enterdName.trim().length===0||enterdAge.length===0)
        {
          SetEror({
            title:'Invalid Input !',
            message:'Please Enter a Valid Name And Age '
          })
          SetShow(true);
           return;
        }
        else if(enterdAge<=0 )
        { 
          SetEror({
            title:'Invalid Age !',
            message:'Please Enter a Valid Age Grater Than 0'
          });
          SetShow(true);
            return;
        }
        else{
          const userY={
            name:enterdName,
            age:enterdAge
          }
       props.sendUser(userY);
        setEntredAge('');
        setEntredName('');
        }
    }
    const CliOkay=()=>{
      SetShow(false);
    }
  return (
  <div>
    {show&& <ErrorModel ICancel={CliOkay} title={err.title} message={err.message} />}
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
    </div>
  );
};

export default UserForm;
