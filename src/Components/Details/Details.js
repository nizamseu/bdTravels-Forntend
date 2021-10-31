import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Table } from 'react-bootstrap';
const Details = () => {
    const {id}=useParams();
    const history = useHistory()
    const [user,setUser]=useState({});

    useEffect(()=>{
        const url =`http://localhost:5000/find/${id}`

        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setUser(data);
        })
    },[])
    console.log(user);
    return (
        <div>
            <h1>Details</h1>
               {
                   user&&  <Box sx={{
                    boxShadow:'10px 10px 15px gray',
                    borderRadius:'30px',
                    my:5,
                  
                }} className='container'>
                    <Box sx={{
                        my:3,
                        mx:'auto'
                    }}>
                        <Typography variant='h3'>
                            {user?.user?.name}
                        </Typography>
        <Table bordered variant="light"  >
            
            <tbody style={{margin:'300px 20px'}}>
                
                  <tr>
                    <td>Name</td>
                    <td>{user?.user?.name}</td>
                </tr>
                  <tr>
                    <td>Email</td>
                    <td>{user?.user?.email}</td>
                </tr>
                  <tr>
                    <td>Date</td>
                    <td>{user?.range?.join()}</td>
                </tr>
                  <tr className="highlight">
                    <td>Destination</td> 
                    <td> </td> 
                </tr>
                <tr>
                    <td>Division</td>
                    <td>{user?.destination?.division}</td>
                </tr>
                <tr>
                    <td>District</td>
                    <td>{user?.destination?.district}</td>
                </tr>
                <tr>
                    <td>Division</td>
                    <td>{user?.destination?.upazilla}</td>
                </tr>
            </tbody>
        </Table>
                       
                        <Button sx={{my:4}} variant='contained' onClick={()=>history.goBack()}>Back</Button>
                    </Box>
                </Box>
               }
        </div>
    );
};

export default Details;