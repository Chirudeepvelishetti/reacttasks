function Uistudent(props)
{
   return(
    <div className="col-sm-5" style={{height : "550px"}}>
    <div className="m-2 p-2 border">
    <div className="text-center">
    <img src ={props.stud.imageUrl} className="my-2 "/>
    </div>
    <h4>id:<span>{props.stud.id}</span></h4>
    <h4>firstname:<span>{props.stud.firstName}</span></h4>
    <h4>lastname:<span>{props.stud.lastName}</span></h4>
    <h4>email:<span>{props.stud.email}</span></h4>
    <h4>contact:<span>{props.stud.contactNumber}</span></h4>
    <h4>age:<span>{props.stud.age}</span></h4>
    <h4>dob:<span>{props.stud.dob}</span></h4>
    <h4>salary:<span>{props.stud.salary}</span></h4>
    <h4>address:<span>{props.stud.address}</span></h4>
    <button className="btn btn-success" onClick={()=>props.selectEmployee(props.stud)}>select</button>
    </div>
    </div>  
   )
}export default Uistudent;