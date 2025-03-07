import React from 'react'
import {useState,useEffect} from 'react'
const viewusers = () => {
    const [users,setUsers]=useState([])//[]->array {}=>object
    const fetchuser=async()=>{
        const resdata=await fetch("http://localhost:3003/users",{method:"GET"});
        const userjson=await resdata.json();
        // console.log(userjson);
        setUsers(userjson)
    }
    
    useEffect(()=>{
        
        fetchuser();

    },[])
    let count = 0;
  return (
    <div>
        <h1>List of Users</h1>
        <table>
            <thead>
                <tr>
                    <th>Sr.no</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user=>{
                       return(
                        <tr key={user.id}>
                        <td>{++count}</td>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><button>Edit</button>
                        <button>Delete</button></td>
                    </tr>
                       )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default viewusers