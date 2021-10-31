import React, { useEffect, useState } from 'react';
import '../ItemCard/itemCard.css'
import { Row, Col, Divider } from 'antd';
import ItemCard from '../ItemCard/ItemCard';
import axios from 'axios';
const MainItem = () => {
    const [item,setItem]=useState([]);

    useEffect(()=>{
        const url= 'https://shielded-crag-67014.herokuapp.com/getItems';
        axios.get(url)
        .then(res=>{
         setItem(res.data)
        })
    },[])
console.log(item);
    return (
        <div  justify='center' align='middle' >
            <h1 style={{margin:'25px 0'}}>Top Destinations</h1>
            <Row  gutter={[10, 60]} >
            {
                item&&item.map(result=><ItemCard result={result}></ItemCard>)
            }
               
              
            </Row>
        </div>
    );
};

export default MainItem;