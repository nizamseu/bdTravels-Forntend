import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
// import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Table} from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import EditIcon from '@mui/icons-material/Edit';
import Test from './Test';
import './manageItem.css'
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
    const [open, setOpen] = useState(false);
    const [actionId,setActionId]=useState('')
    const [isUpdate,setIsUpdate]=useState(false)

console.log("tge",actionId);
    const handleClickOpen = (id) => {
        setActionId(id)
      setOpen(true);
    };

   const status=(type)=>{
        console.log("Amiii",type);
   } 
    const handleClose = () => {
      setOpen(false);
    };
    const history =useHistory()

    // Load data 
    useEffect(()=>{
        const url ='https://shielded-crag-67014.herokuapp.com/users';

        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setUser(data)
        })
    },[actionId])

//handle Delete
const handleDelete =(id)=>{
    const url =`https://shielded-crag-67014.herokuapp.com/users/${id}`;

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

            <Table  responsive className='table table-borderless'>
            <thead>
                <tr>
                    <th>Name</th>
                    {/* <th>Email</th> */}
                    {/* <th>Date</th> */}
                    <th>Destination</th>
                    {/* <th>Details</th>
                    <th>Update</th> */}
                    <th>Status</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                   user&& user?.map(item=><tr>
                    <td>{item.user.name}</td>
                    {/* <td>{item.user.email}</td> */}
                    {/* <td>{item?.range?.join()}</td> */}
                    <td>{item.destination.division}, {item.destination.district}, {item.destination.upazilla}</td>
                    {/* <td>
                    <Button  variant="primary"> 
                         <Link style={{textDecoration:'none',color:'white'}} to={`/details/${item._id}`}>Details</Link>
                    </Button>
                    </td>
                    <td>
                        <Button variant="info">
                        <Link style={{textDecoration:'none',color:'white'}} to={`/update/${item._id}`}>Update</Link>
                    </Button>
                    </td> */}
                    <td className='d-flex'>
                    {item.user.status==='Cancel' && 
                        <Typography className='manageItem' style={{background:'#FF7676'}}
                        >{item.user.status}</Typography>}

                        {item.user.status==='Approved' && 
                        <Typography className='manageItem' style={{background:'#38AF86'}}>{item.user.status}</Typography>}
                       
                        {item.user.status==='Pending' && 
                        <Typography className='manageItem' style={{background:'#76C5FF'}}>{item.user.status}</Typography>} 

                    <IconButton 
                        onClick={()=>handleClickOpen(item._id)}
                         color="primary"  component="span">
                        <EditIcon />
                     </IconButton>
                     
                    </td>
                    <td>
                    <Button  onClick={()=>handleDelete(item._id)} variant="contained" >DELETE</Button>
                    </td>
                </tr>
                    )
                }
                
            </tbody>
        </Table>
      
        <Dialog
       open={open}
       onClose={handleClose}
      >
    <DialogTitle> Action Type <br/></DialogTitle>
    <DialogContent>
     <Test actionId={actionId} handleClose={handleClose} setIsUpdate={setIsUpdate}></Test>
    </DialogContent>
    
       <DialogActions>
           
       <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        {/* <Button onClick={handleClose} color="primary" autoFocus>
            Submit
        </Button> */}
       </DialogActions>
      </Dialog>

    </div>

    );
};

export default ManageItem;