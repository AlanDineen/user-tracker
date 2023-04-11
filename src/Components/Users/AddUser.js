import React, { useState, useRef } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    /* const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState(''); */
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUsersAge = ageInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredUsersAge.trim().length === 0){
            setError({title: 'Invalid input', message: 'Please enter a valid name and age'})
            return;
        }
        if(+enteredUsersAge < 1){
            setError({title: 'Invalid age', message: 'Please enter a valid age'})
            return;
        /* if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({title: 'Invalid input', message: 'Please enter a valid name and age'})
            return;
        }
        if(+enteredAge < 1){
            setError({title: 'Invalid age', message: 'Please enter a valid age'})
            return; */
            /* return stops the function of running, so code below wont run if return is hit */
        }
        /* props.onAddUser(enteredUsername, enteredAge); */
        props.onAddUser(enteredName, enteredUsersAge);
        /* setEnteredUsername('')
        setEnteredAge('') */
        nameInputRef.current.value ='';
        ageInputRef.current.value ='';
    }

    const errorHandler = () => {
        setError(null)
    }

   /*  const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)/* Setting the userName to be whatever the user has typed so far - every key stroke
    } */

   /*  const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)/* Setting the age to be whatever the user has typed so far - every key stroke
    } */

  return (
    <Wrapper>
        {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} ></ErrorModal>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input type='text'id='username' /* value={enteredUsername} onChange={userNameChangeHandler} */ ref={nameInputRef}/>
                <label htmlFor='age'>Age (Years)</label>
                <input type='number'id='age' /* value={enteredAge} onChange={ageChangeHandler} */ ref={ageInputRef}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    </Wrapper>
  )
}

export default AddUser