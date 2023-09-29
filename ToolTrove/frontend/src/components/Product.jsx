import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Product = ({ productData }) => {

  console.log( "This is ",productData)
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/products/${productData._id}`}>
        <Card.Img src={productData.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/products/${productData._id}`}>
          <Card.Title as="div">
            <strong>{productData.name}</strong>
          </Card.Title>
          </Link>

          <Card.Text as="h3">
            ₹{productData.price}
          </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product