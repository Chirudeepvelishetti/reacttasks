import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Uistudent from './Uistudent';
function Studentlist(){
    const [ students,setStudents]=useState([]);
    useEffect(()=>{
        axios.get("https://hub.dummyapis.com/employee").then(response =>{
            setStudents(response.data);
            console.log(students);
        })
    })
    const selectEmployee=(stud)=>{
        console.log(stud);
    }
 return(
    <div className='container'>
    <div className='row'>
    {
        students.map(stud => (
                <Uistudent stud={stud} selectEmployee={selectEmployee}/> 
        ))
    }
    </div>
    </div>
 )
}
export default Studentlist;