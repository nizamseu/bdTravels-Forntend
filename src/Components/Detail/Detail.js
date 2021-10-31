import { border } from '@mui/system';
import { Col, Row } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import banner from '../../images/Somapura.jpg';
import UserForm from '../UserForm/UserForm';
import './detail.css'
const Detail = () => {
    const [detail,setDetail]=useState([])
    const {from}= useParams()
console.log("id",from);
    useEffect(()=>{
        const url=`https://shielded-crag-67014.herokuapp.com/itemFind/${from}`
        axios.get(url)
        .then(data=>{
            setDetail(data.data);
        })  
    },[from])

    console.log("from detail",detail.tittel);
    return (
        <Row>
           <Row >
           
               <Col span={24}>
                    <div className='container'>
                        <img className='image' style={{width:'100vw',   height:'450px'}}  src={detail.banner} alt="" />
                        <div className='middle'>
                            <h1 style={{color:'white', fontSize:'70px', fontWeight:'900'}}>{detail.tittel}</h1>
                        </div>

                    </div>
               </Col>
          
           </Row>
           {/* second half  */}
           <Row style={{margin:'100px 30px'}} gutter={[10, 60]}>
               <Col className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-12 ant-col-xl-12">
                    <div>
                        <h1 >Over View</h1>
                        <img height='300px' src={detail.thumbnail} alt="" />
                    </div>
                    <div> 
                        <p style={{margin:'30px 0', textAlign:'justify', fontSize:'16px'}}>{detail.description} </p>
                    </div>
               </Col>

               <Col className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-12 ant-col-xl-12">
                    <UserForm location={detail.tittel}></UserForm>
               </Col>
           </Row>
        </Row>
    );
};

export default Detail;