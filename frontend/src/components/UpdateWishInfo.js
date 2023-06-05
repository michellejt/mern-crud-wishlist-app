import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateWishInfo(props) {
  const [wish, setWish] = useState({
    title: '',
    image: '',
    description: '',
    price: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/wishes/${id}`)
      .then((res) => {
        setWish({
          title: res.data.title,
          image: res.data.image,
          description: res.data.description,
          price: res.data.price,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateWishInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setWish({ ...wish, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: wish.title,
      image: wish.image,
      description: wish.description,
      price: wish.price,
    };

    axios
      .put(`http://localhost:8082/api/wishes/${id}`, data)
      .then((res) => {
        navigate(`/show-wish/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateWishInfo!');
      });
  };

  return (
    <div className='UpdateWishInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Wish List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Wish</h1>
            <p className='lead text-center'>Update Wish</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                placeholder='Title of the Wish'
                name='title'
                className='form-control'
                value={wish.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='image'>image</label>
              <input
                type='text'
                placeholder='image'
                name='image'
                className='form-control'
                value={wish.image}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>description</label>
              <input
                type='text'
                placeholder='description'
                name='description'
                className='form-control'
                value={wish.description}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='publisher'>price</label>
              <input
                type='text'
                placeholder='price of the Wish'
                name='price'
                className='form-control'
                value={wish.price}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Wish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateWishInfo;