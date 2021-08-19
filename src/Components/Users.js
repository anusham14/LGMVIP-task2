import React,{useState} from "react";
import axios from "axios";

//func = components , these are used as tags when exported

/*function Users(props){
    return <h1>Welcome {props.name} !</h1>    
}*/

function Users (){

    //users = current value setUsers = func
    const [users,setUsers] = useState([]);

    //func to get users
    const getUsers = async() =>{
        const res = await axios.get('https://reqres.in/api/users?page=1')
        console.log(res) //get response of API in console
        const userData = res.data.data;
        setUsers(userData)
        }

    return(
    <>
        <button onClick={getUsers}>Get users</button>
        <ul>
            {users.map(user =>(
                <li key={user.id}> <b>Name :</b> {user.first_name} {user.last_name} <b> Email :</b> {user.email}</li>
            ))}
        </ul>
    </>
        
    ) 
     
}
export default Users;