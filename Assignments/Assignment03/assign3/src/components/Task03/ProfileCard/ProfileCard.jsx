import React from 'react'
import styles from './ProfileCard.module.css'

const ProfileCard = (prop) => {
  return (
     <div className={styles.profileCard}>
            <img src="\src\assets\react.svg" alt="Image" />
            <h3>{prop.name}</h3>
            <p>{prop.role}</p>
            <button>Know More!</button>
        </div>
  )
}

export default ProfileCard


// 3. Create a `<ProfileCard>` component that takes props: `name`, `role`, and `image`. Use it 
// three times with different data. 