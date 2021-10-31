import React, { useEffect, useRef, useState } from 'react';
import { Form, Input, Select,InputNumber,DatePicker, ButtonDatePicker, TimePicker,Button } from 'antd';
import axios from 'axios';
import useFirebase from '../../Hooks/useFirebase';
import {useParams,useHistory} from "react-router-dom";
import Swal from 'sweetalert2'

const { Option } = Select;

const AlertMessage =()=>{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1000
      })
}
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };



  const { RangePicker } = DatePicker;
  
  const rangeConfig = {
    rules: [
      {
        type: 'array',
        required: true,
        message: 'Please select time!',
      },
    ],
  };
  


const UserForm = ({location}) => {
       const [form] = Form.useForm();
        const {user,isLoading}= useFirebase();
        const {from}= useParams()
        const history =useHistory()
        const [division,setDivision]=useState([]) 
        const [district,setDistrict]=useState([])
        const [districts,setDistricts]=useState([]) 
        const [upazilla,setUpazilla]=useState([]) 

console.log("locattion",location);

        const onReset = () => {
          form.resetFields();
        };

        useEffect(()=>{
            const url = `https://bdapis.herokuapp.com/api/v1.1/divisions`;

            fetch(url)
            .then(res=>res.json())
            .then(result =>{
                setDivision(result.data);
            })
        },[])
 
        useEffect(()=>{
               
                    const url = `https://bdapis.herokuapp.com/api/v1.1/division/${district}`;
            fetch(url)
            .then(res=>res.json())
            .then(result =>{
              setDistricts(result.data);
             
            })
                
        },[district])
 
        if(isLoading){
          return <div>Loadding ....</div>
        }

      const onFinish = (fieldsValue) => {
        // Should format date value before submit.
     
        const rangeValue = fieldsValue['range'];
        const values = {
          ...fieldsValue,
          'range': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
          
        };
        values.user.status ='pendding';
        values.user.name =user.displayName;
        values.user.email =user.email;
        values.user.from =location;
        
        axios.post('https://shielded-crag-67014.herokuapp.com/addUser', values)
        .then(res=> {
          if(res?.data?.insertedId){
            AlertMessage()
            onReset()
        }
        });

        console.log('Received values of form: ', values);
       
      //  history.push('/')
      };


     const  handleOnChange = (value) => {
             setDistrict(value);
}
     const  handleOnChangeDistrict = (value) => {
         const upazillaData = districts.find(item => item._id ===value.toLowerCase());
         upazillaData && setUpazilla(upazillaData.upazilla)
}
console.log(upazilla);

    return (
        <div style={{margin:'20px 10px'}}>
            <h1>Please Fill Up The Form</h1>
        <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
        
        >
        <Form.Item
        name={['user', 'name']}
        label="Name"
        
       
      >
       <Input  values={user.displayName} defaultValue={user.displayName} />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
        value='nnnnnn'
      >
        <Input defaultValue ={user?.email} value={user.email} />
      </Form.Item>
      
      <Form.Item  name="range" label="Date Range" 
            {...rangeConfig}>
        <RangePicker style={{width:'100%'}} />
      </Form.Item>

      <Form.Item name={['user', 'from']} label="From">
       {location&& <Input defaultValue={location} value={location} />}
      </Form.Item>

      <Form.Item
       
       name={['destination', 'division']}
        label="Division"
        hasFeedback
        rules={[{ required: true, message: 'Please select your country!' }]}
      >
        <Select onSelect={(value) => handleOnChange(value)} placeholder="Please select a Division">
        {
            division && division.map(item=>  <Option value={item.division}>{item.division}</Option>)
        }

        </Select>
      </Form.Item>

      <Form.Item
       
       name={['destination', 'district']}
        label="District"
        hasFeedback
        rules={[{ required: true, message: 'Please select your country!' }]}
      >
        <Select  onSelect={(value) => handleOnChangeDistrict(value)} placeholder="Please select a District">
        {
            districts && districts?.map(item=>  <Option value={item.district}>{item.district}</Option>)
        }

        </Select>
      </Form.Item>

      <Form.Item
       
       name={['destination', 'upazilla']}
        label="Upazilla"
        hasFeedback
        rules={[{ required: true, message: 'Please select your upazilla' }]}
      >
        <Select onSelect={(value) => handleOnChangeDistrict(value)} placeholder="Please select a upazilla">
        {
            upazilla && upazilla?.map(item=>  <Option value={item}>{item}</Option>)
        }

        </Select>
      </Form.Item>


      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>


      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

     


    </Form>

    
        </div>
    );
};

export default UserForm;