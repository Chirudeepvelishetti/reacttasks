import { useState } from "react";
import axios from "axios";

function Sample(){
   const[employees,setEmployees] = useState([]);
// useEffect (()=>{
    

// })
   const fetchData = () =>{
   axios.get("https://fakestoreapi.com/products").then(
    responce => {
        console.log("responce",responce.data)
        setEmployees(responce.data)
    },
    error => {
        console.log("error",error)
    }
   )
}
    return(
        <div>
        <h2>Employess</h2>
        <button onClick={fetchData}>Products</button>
       
        </div>
    )
}
export default Sample; 