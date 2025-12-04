import React from 'react'
import styles from './StudentCard.module.css'
import Cards from './Card/Cards'

// 1. Create an array of student objects (`name`, `dept`, `year`). Display them using `.map()` 
// inside cards. 

const StudentCard = () => {
  
  const studentArray = [
    {
        id:1,
        name:`Deva${Math.floor(Math.random()*100)+1}`,
        age:`${Math.floor(Math.random()*100)+1}`,
        department:`Mechanical`
    },
    {
        id:2,
        name:`Deva${Math.floor(Math.random()*100)+1}`,
        age:`${Math.floor(Math.random()*100)+1}`,
        department:`Mechanical`
    },
    {
        id:3,
        name:`Deva${Math.floor(Math.random()*100)+1}`,
        age:`${Math.floor(Math.random()*100)+1}`,
        department:`Mechanical`
    },
    {
        id:4,
        name:`Deva${Math.floor(Math.random()*100)+1}`,
        age:`${Math.floor(Math.random()*100)+1}`,
        department:`Mechanical`
    },
    {
        id:5,
        name:`Deva${Math.floor(Math.random()*100)+1}`,
        age:`${Math.floor(Math.random()*100)+1}`,
        department:`Mechanical`
    }
  ]
  
  return (
    <div className={styles}>
        <Cards name="Deva" age="27" department="Mechanical"/>
           { studentArray.map(e=>{
               return <Cards name={e.name} age={e.age<10?"0"+e.age:e.age} department={e.department}/>
            })}
        
        {/* First Try */}
        {/* <table className={style.students}>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Department</th>
            </tr>{
        studentArray.map((student)=>{
                    return (
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.department}</td>
                    </tr>
                    )
        })
        }
        </tbody>
        </table> */}
    </div>
  )
}

export default StudentCard