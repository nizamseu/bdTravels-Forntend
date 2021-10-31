import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
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
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


const ManageForm = () => {
  const [form] = Form.useForm();


  const onReset = () => {
    form.resetFields();
  };


  const onFinish = (values) => {
    axios.post('https://shielded-crag-67014.herokuapp.com/addItem', values)
    .then(res=> {
      console.log(res);
      if(res?.data?.insertedId){
          AlertMessage()
          onReset()
      }
    });
    
  };



    return (
        <div className='d-flex justify-content-center align-items-center'>
         
            <div style={{width:'50%'}}>
            <h1>Add New Item</h1>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="tittel"
        label="Tittle"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder='Tittle' />
      </Form.Item>
      <Form.Item
        name="location"
        label="Location"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder='Location' />
      </Form.Item>
      <Form.Item
        name="banner"
        label="Banner"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Banner URL " />
      </Form.Item>
      <Form.Item
        name="thumbnail"
        label="Thumbnail"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input  placeholder="Thumbnail URL " />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea placeholder='Description' />
      </Form.Item>
     
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
       
      </Form.Item>
    </Form>
            </div>
        </div>
    );
};

export default ManageForm;