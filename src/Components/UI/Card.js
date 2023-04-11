import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{/* props.className are the stypes defined in className in AddUser which we also want to apply here with classes.card */}
        {props.children} {/* All children elements within <Card> tag in AddUser */}
    </div>
  )
}

export default Card