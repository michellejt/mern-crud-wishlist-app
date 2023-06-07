import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

import { URL } from "../App"

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
      .get(`${URL}/api/wishes/${id}`)
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
      .put(`${URL}/api/wishes/${id}`, data)
      .then((res) => {
        navigate(`/show-wish/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateWishInfo!');
      });
  };

  return (


<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

<div class="fixed inset-0 z-10 overflow-y-auto">
  <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
      <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">

          <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <h3 className='display-4 text-center'>Edit Wish</h3>
            <div class="mt-2">
            

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

          </form>

      </div>
    </div>
            
       

          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <Link to='/' className='btn btn-outline-warning float-left'>
              Cancel
            </Link>
            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Wish
            </button>
      </div>
    </div>
  </div>


  );
}

export default UpdateWishInfo;