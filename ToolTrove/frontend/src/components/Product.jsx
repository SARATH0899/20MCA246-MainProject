import React from 'react';
import { Card } from 'react-bootstrap';


const Product = ({ productData }) => {

  console.log( "This is ",productData)
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/products/${productData._id}`}>
        <Card.Img src={productData.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/products/${productData._id}`}>
          <Card.Title as="div">
            <strong>{productData.name}</strong>
          </Card.Title>
          </a>

          <Card.Text as="h3">
            ₹{productData.price}
          </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product