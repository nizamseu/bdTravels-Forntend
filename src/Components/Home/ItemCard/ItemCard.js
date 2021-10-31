import React from 'react';
import { Col,Card,Typography} from 'antd';
import './itemCard.css'
import { Link, NavLink } from 'react-router-dom';
const { Text, Title} = Typography;

const ItemCard = () => {
    const from ='dhaka';
    return (
         <Col className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-12 ant-col-xl-8">
            <Link to = {`/detail/${from}`}>
                <Card
                className='card'
                hoverable
                style={{ width: 340 }}
                cover={<img  alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
                <Title>Nizam uddin</Title>
                <Link to= {`/detail/${from}`}> Details</Link>
                </Card>
            </Link>
        </Col>
    );
};

export default ItemCard;