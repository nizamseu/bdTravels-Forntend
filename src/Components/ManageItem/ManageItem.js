import {Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
// import DeleteIcon from '@mui/icons-material/Delete';

const deleteConfirrm =()=>{
     return Swal.fire({
        icon: 'error',
        title: 'Are you want DELETE It?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
      })

}


const ManageItem = () => {
    const [user,setUser]=useState([]);
    const history =useHistory()

    // Load data 
    useEffect(()=>{
        const url ='http://localhost:5000/users';

        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setUser(data)
        })
    },[])

//handle Delete
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
                   const restItem = user.filter(item=>item._id !== id);
                   setUser(restItem)
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

    return (
        <div className='container'>
            <h1 className='my-5'>All Users</h1>

            <Table bordered variant="dark">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Destination</th>
                    <th>Details</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                   user&& user?.map(item=><tr>
                    <td>{item.user.name}</td>
                    <td>{item.user.email}</td>
                    <td>{item?.range?.join()}</td>
                    <td>{item.destination.division}, {item.destination.district}, {item.destination.upazilla}</td>
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
        </Table>
        </div>
    );
};

export default ManageItem;