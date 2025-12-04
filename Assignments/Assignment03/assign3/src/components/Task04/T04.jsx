// 4. Creatassiinput field for “Username.” 
// When the user types, display the entered name live 
// below it. 

import React from 'react'
import { useState } from 'react'
import styles from './T04.module.css'

const T04 = () => {
    const [text, settext] = useState("")
    const Handler = ()=>{
        let v = document.getElementById("txt1").value;
        settext(v)
    }
  return (
    <div className={styles.textBoxI}>
        <label htmlFor="txt1">
            <h1>Letter Box !</h1>
            <textarea type="text" name="txt" id="txt1" onChange={(e)=>{
                console.log(e);
                
            Handler()
        }}>
            
        </textarea>
        </label>
        <button>Send</button>
        <p>{text}</p>
    </div>
  )
}

export default T04