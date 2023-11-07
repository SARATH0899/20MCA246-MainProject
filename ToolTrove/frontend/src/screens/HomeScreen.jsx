import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetProductsQuery } from '../slices/productsApiSlice';


const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      { isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          { error?.data?.message || error.error }
        </Message>
        ) : (
        <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product) =>(
                <Col key={product._id} sm={6} md={4} lg={3} xl={2}>
                    <Product productData={product} />
                </Col>

            ))}
        </Row>
      </>) }  
    </>

    
  );
};


export default HomeScreen