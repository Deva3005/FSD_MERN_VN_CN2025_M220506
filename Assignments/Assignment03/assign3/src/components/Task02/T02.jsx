// 2. Show “Welcome back!” if a variable `isLoggedIn` is true, else show “Please log in”. 

import React, { useState } from 'react'
import style from './T02.module.css'

const T02 = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
  return (
    <div className={style.toggleMsg}>
        {isLoggedIn?<h1 className={style.success}>Welcome Back !</h1>:
                    <h1 className={style.warn}>Please Log in </h1>}
        <button onClick={()=>{setisLoggedIn(prev=>!prev)}}>{isLoggedIn?"Log out":"Log in"}</button>
    </div>
  )
}

export default T02