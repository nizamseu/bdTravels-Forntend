
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import './manageItem.css';
import { FormControl,Select, MenuItem,FormHelperText } from '@mui/material';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
const Test = ({actionId,handleClose,setIsUpdate}) => {
    const history= useHistory()
    const [actionValue, setActionValue] = useState('');
    const classes = useStyles();
    

    const handleChange = (event) => {
      event.preventDefault()
      console.log(event.target.value);
      setActionValue(event.target.value);
      handleClose()
      
    };
    
    useEffect(()=>{
      fetch(`https://shielded-crag-67014.herokuapp.com/action`,{
      method:'PATCH',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({id:actionId,actionValue:actionValue})
    })
    .then(res=>res.json())
    .then(success=>{
      success&& history.go('/')
    })
    },[actionValue])

    
    return (
        <div>
             <FormControl >
        <Select
          value={actionValue}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="" className='selectItem'>
            <em>Pending</em>
          </MenuItem><br />
          <MenuItem value={'Pending'} className='selectItem'>Pending</MenuItem> <br />
          <MenuItem value={'Approved'} className='selectItem'>Approved</MenuItem><br />
          <MenuItem value={'Cancel'} className='selectItem'>Cancel</MenuItem><br />
        </Select>
      </FormControl>
        </div>
    );
};

export default Test;