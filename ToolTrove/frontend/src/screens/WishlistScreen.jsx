import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Button, Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";
import { addToWishlist, removeFromWishlist } from "../slices/wishlistSlice";
import { addToCart } from "../slices/cartSlice";

const WishlistScreen = () => {
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist);
  const { wishlistItems } = wishlist;

  const addToWishlistHandler = async (product, qty) => {
    dispatch(addToWishlist({ ...product, qty }));
  };

  const removeFromWishlistHandler = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Container>
      <Row>
        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
          Your Favorites
        </h1>
        {wishlistItems.length === 0 ? (
          <Message>
            You seem to not have much money to purchase! Grab something for
            later purchase <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {wishlistItems.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>₹{item.price}</Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => addToWishlistHandler(item, item.qty - 1)}
                      disabled={item.qty === 1}
                    >
                      -
                    </Button>
                    <span style={{ margin: "0 5px" }}>{item.qty}</span>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => addToWishlistHandler(item, item.qty + 1)}
                      disabled={item.qty === item.countInStock}
                    >
                      +
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => addToCartHandler(item)}
                    >
                      Add to Cart
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromWishlistHandler(item._id)}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Row>
    </Container>
  );
};

export default WishlistScreen;
