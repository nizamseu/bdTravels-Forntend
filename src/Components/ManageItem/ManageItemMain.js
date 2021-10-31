import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ManageForm from './ManageForm';
import ManageItem from './ManageItem';

const ManageItemMain = () => {
    const [toggle,setToggle]=useState(true)
    
    


    return (
        <div>
          
       <div className='my-5'>
        <Button className='mx-1' onClick={()=>{setToggle(true)}}>All User Data</Button>
        <Button className='mx-1' onClick={()=>{setToggle(false)}}>Add New Item</Button>
       </div>
           
            {
                toggle?<ManageItem></ManageItem>: <ManageForm></ManageForm>
            }
            
           
        </div>
    );
};

export default ManageItemMain;