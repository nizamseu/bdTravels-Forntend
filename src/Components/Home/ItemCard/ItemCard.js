import React from "react";
import { Col, Card, Typography } from "antd";
import "./itemCard.css";
import { Link, NavLink } from "react-router-dom";
import { Button } from "antd/lib/radio";
const { Text, Title } = Typography;

const ItemCard = ({ result }) => {
  console.log(result);
  const { tittel, thumbnail, description, banner, _id } = result;
  // const from ='dhaka';
  return (
    <Col className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-12 ant-col-xl-8">
      <Link to={`/detail/${_id}`}>
        <Card
          className="card"
          hoverable
          style={{ width: "340px" }}
          cover={
            <img
              style={{ width: "340px", height: "250px" }}
              alt="example"
              src={thumbnail}
            />
          }
        >
          <Title>{tittel}</Title>
          <Link to={`/detail/${_id}`}>
            <Button danger>Details</Button>
          </Link>
        </Card>
      </Link>
    </Col>
  );
};

export default ItemCard;
