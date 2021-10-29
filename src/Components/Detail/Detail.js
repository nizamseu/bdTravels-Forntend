import { border } from '@mui/system';
import { Col, Row } from 'antd';
import React from 'react';
import banner from '../../images/Somapura.jpg';
import UserForm from '../UserForm/UserForm';
import './detail.css'
const Detail = () => {
    return (
        <Row>
           <Row >
           
               <Col span={24}>
                    <div className='container'>
                        <img className='image' style={{width:'100vw',   height:'450px'}}  src={banner} alt="" />
                        <div className='middle'>
                            <h1 style={{color:'white', fontSize:'70px', fontWeight:'900'}}>Dhaka</h1>
                        </div>

                    </div>
               </Col>
          
           </Row>
           {/* second half  */}
           <Row style={{margin:'100px 30px'}} gutter={[10, 60]}>
               <Col className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-12 ant-col-xl-12">
                    <div>
                        <h1 >Over View</h1>
                        <img height='300px' src={banner} alt="" />
                    </div>
                    <div> 
                        <p style={{margin:'30px 0', textAlign:'justify', fontSize:'16px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, optio consequatur! Laborum, modi. Quas unde, quidem molestias, vero cupiditate veniam facilis corporis explicabo maiores illo corrupti consequatur quod. Saepe debitis aliquam illum iure eligendi voluptatem reprehenderit unde facere architecto nulla hic inventore ratione ad molestias magnam delectus beatae ea temporibus laboriosam corrupti sit, ipsa tenetur! Est assumenda facilis, eveniet temporibus, corporis magnam veniam omnis fugit vel facere alias porro similique? Quaerat cum laudantium explicabo quod. Quibusdam, nulla. Officiis ut, a repellat rerum modi ipsam minus aliquam tenetur deserunt corporis at ea delectus impedit consequuntur quod sunt quaerat et sapiente eos, totam doloribus error quos veritatis? Aliquam sapiente, illum vel sint praesentium id totam excepturi fugiat quasi officiis dicta error a eius vitae exercitationem vero nemo perferendis itaque at? Eum praesentium quibusdam laudantium rerum quasi ipsum repellat nihil tenetur suscipit hic nulla libero, saepe reprehenderit at sapiente quisquam rem temporibus deserunt!</p>
                    </div>
               </Col>

               <Col className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-12 ant-col-xl-12">
                    <UserForm></UserForm>
               </Col>
           </Row>
        </Row>
    );
};

export default Detail;