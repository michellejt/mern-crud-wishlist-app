import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import { URL } from "../App"

const CreateWish = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [wish, setWish] = useState({
    title: '',
    isbn: '',
    author: '',
    description: '',
    published_date: '',
    publisher: '',
  });

  const onChange = (e) => {
    setWish({ ...wish, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();


    axios
      .post(`${URL}/api/wishes`, wish)
      .then((res) => {
        setWish({
          title: '',
          image: '',
          link: '',
          description: '',
          price: '',
        });


        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateWish!');
      });
  };

  return (
    <div className='CreateWish'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show BooK List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Wish</h1>
            <p className='lead text-center'>Create new wish</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
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
                <input
                  type='text'
                  placeholder='image'
                  name='image'
                  className='form-control'
                  value={wish.image}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Description'
                  name='description'
                  className='form-control'
                  value={wish.description}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='link to site'
                  name='description'
                  className='form-control'
                  value={wish.link}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='price'
                  name='price'
                  className='form-control'
                  value={wish.price}
                  onChange={onChange}
                />
              </div>
              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWish;