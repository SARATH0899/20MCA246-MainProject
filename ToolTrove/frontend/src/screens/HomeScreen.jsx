import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product) =>(
                <Col key={product._id} sm={6} md={4} lg={3} xl={2}>
                    <Product productData={product} />
                </Col>

            ))}
        </Row>
    </>

    
  );
};


export default HomeScreen