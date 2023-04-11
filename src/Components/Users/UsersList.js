import React from 'react'
import classes from './UsersList.module.css'
import Card from '../UI/Card'

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
        <ul>
            {/* mapping our list of users to an array of jsx elements which are rendered on to the dom */}
            {/* we return a jsx element for every user we expect to get from users array */}
            {props.users.map((user) => (
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                </li>
            ))}
        </ul>
    </Card>
  )
}

export default UsersList