import React from 'react';
import '../ItemCard/itemCard.css'
import { Row, Col, Divider } from 'antd';
import ItemCard from '../ItemCard/ItemCard';
const MainItem = () => {
    return (
        <div  justify='center' align='middle' >
            <h1>Top Destinations</h1>
            <Row  gutter={[10, 60]} >
               <ItemCard></ItemCard>
               <ItemCard></ItemCard>
               <ItemCard></ItemCard>
               <ItemCard></ItemCard>
               <ItemCard></ItemCard>
               <ItemCard></ItemCard>
               <ItemCard></ItemCard>
            </Row>
        </div>
    );
};

export default MainItem;