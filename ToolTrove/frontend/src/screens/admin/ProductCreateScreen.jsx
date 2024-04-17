import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useCreateProductMutation, useUploadProductImageMutation } from '../../slices/productsApiSlice';
import FormContainer from '../../components/FormContainer';
import Loader from '../../components/Loader';
import axios from 'axios';

const ProductCreateScreen = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');

  const [createProduct, { isLoading }] = useCreateProductMutation();
  const navigate = useNavigate();

  const [uploadProductImage, { isLoading: loadingUpload }] =
  useUploadProductImageMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
        const productData = {
            name,
            price,
            image,
            brand,
            category,
            countInStock,
            description
          };
          const response = await axios.post("https://main-project-95jn.onrender.com/api/products", productData);
          toast.success('Product created successfully');
          navigate('/admin/productlist');
    } catch (err) {
        console.log(err)
      toast.error(err?.data?.message || err.error);
    }
  };

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
      const res = await uploadProductImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Create Product</h1>
        {isLoading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name' className='my-2'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='price' className='my-2'>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='image' classname='my-2'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.Control
                label='Choose File'
                onChange={uploadFileHandler}
                type='file'
              ></Form.Control>
              {loadingUpload && <Loader />}
            </Form.Group>

          <Form.Group controlId='brand' className='my-2'>
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter brand'
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='countInStock' className='my-2'>
            <Form.Label>Count In Stock</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter countInStock'
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='category' className='my-2'>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='description' className='my-2'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button
            type='submit'
            variant='primary'
            className='my-2'
            style={{ marginTop: '1rem' }}
          >
            Create
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default ProductCreateScreen;
