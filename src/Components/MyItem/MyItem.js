import React ,{ useEffect, useState }from 'react';
import useFirebase from '../../Hooks/useFirebase';
import axios from 'axios';
import {Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



const deleteConfirrm =()=>{
    return Swal.fire({
       icon: 'error',
       title: 'Are you want DELETE It?',
       showCancelButton: true,
       confirmButtonText: 'Yes',
     })

}


const MyItem = () => {
    const {user,isLoading} =useFirebase()
    const [userData,setUserData] = useState([]);
    const history =useHistory()

    // Load data 
    const email = user?.email;
useEffect(()=>{
    const url=`http://localhost:5000/findUser/${email}`
    axios.get(url)
    .then(data=>{
        setUserData(data.data);
    })  
},[email])

    if(isLoading){
        return<h1>Loadding....</h1>
    }

    const handleDelete =(id)=>{
        const url =`http://localhost:5000/users/${id}`;
    
        deleteConfirrm()
        .then((result) => {
            if (result.isConfirmed) {
                fetch(url,{
                    method:'DELETE', 
                })
                .then(res=>res.json())
                .then(data=>{

                   if(data.deletedCount>0){
                       const restItem = userData.filter(item=>item._id !== id);
                       setUserData(restItem)
                   }
                })
                Swal.fire({
                    icon: 'error',
                    title: 'DELETED',
                    showConfirmButton: false,
                    timer: 1000
    
                }) 
            } 
          })
    
    
        
    
    
    }    
    


    
console.log(userData);
    return (
        <div className='container'>
            <h1 className='my-5'>MY ITEMS</h1>

            {userData.length>0&& <Table bordered variant="dark">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Details</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                   userData?.map(item=><tr>
                    <td>{item.user.name}</td>
                    <td>{item.user.email}</td>
                    <td>
                    <Button  variant="primary"> 
                         <Link style={{textDecoration:'none',color:'white'}} to={`/details/${item._id}`}>Details</Link>
                    </Button>
                    </td>
                    <td>
                        <Button variant="info">
                        <Link style={{textDecoration:'none',color:'white'}} to={`/update/${item._id}`}>Update</Link>
                    </Button>
                    </td>
                    <td>
                    <Button onClick={()=>handleDelete(item._id)} variant="danger">DELETE</Button>
                    </td>
                </tr>
                    )
                }
                
            </tbody>
        </Table>}
        </div>
    );
};

export default MyItem;