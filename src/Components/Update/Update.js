import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Swal from 'sweetalert2'
const updateAlert =()=>{
    Swal.fire({
        icon: 'success',
        title: 'Updated',
        text: 'Successfully Updated',
        showConfirmButton: false,
        timer: 1500

    }) 
}

const Update = () => {
    const {id} =useParams();
    const history =useHistory()
    const [update,setUpdate] =useState({});

useEffect(()=>{
    const url =`http://localhost:5000/findUser/${id}`;

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        setUpdate(data);
    })

},[])

const handleChange =(e)=>{
  const updateData= {...update,[e.target.name]:e.target.value};
  setUpdate(updateData)
      
}
const handleUpdate =(e)=>{
    const url =`http://localhost:5000/user/${id}`;
    fetch(url,{
        method:'PUT',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify(update)
    })
    .then(res=>res.json())
    .then(data=>{
       if(data.modifiedCount){
        updateAlert();
       
       }
    })
    .finally(()=>{
        history.push('/home');
    })

    e.preventDefault();
    
   
}


    return (
        <div>
            <h1>Update User</h1>
            <h1>{update.name}</h1>
            <h3>{update.email}</h3>
            <h3>{update.phone}</h3><br /><br /><br />

            <form onSubmit={handleUpdate}>
                <input onChange={handleChange} type="text" name="name" id=""  value={update.name} /> <br />
                <input onChange={handleChange} type="text" name="email" id=""  value={update.email} /><br />
                <input onChange={handleChange} type="text" name="phone" id=""  value={update.phone} /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;