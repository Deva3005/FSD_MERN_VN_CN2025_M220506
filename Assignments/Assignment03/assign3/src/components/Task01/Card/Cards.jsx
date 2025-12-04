import React from 'react'
import styles from './Card.module.css'

const Cards = (prop) => {

  return (
    <div className={styles.cardI}>
        <img src="\src\assets\react.svg" alt="Image" />
        <h3>{prop.name}</h3>
        <p>{prop.age} years Old</p>
        <p>From {prop.department} department</p>
        <button>Click me</button>
    </div>
  )
}

export default Cards