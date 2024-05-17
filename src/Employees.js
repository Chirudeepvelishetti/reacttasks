import axios from 'axios';
import { useState, useEffect } from 'react';

function Employees() {
    const [employees , setEmployees] = useState([]);
    useEffect(() => {
        axios.get('https://hub.dummyapis.com/employee').then(response => {
            console.log(response.data);
            setEmployees(response.data);
        })
    }, []);
    return(
        <div>
        <h2 >Employee</h2>
        <button onClick={Employees}>Products</button>
        <h1>{employees.length}</h1>
        </div>
    )

}
export default Employees;