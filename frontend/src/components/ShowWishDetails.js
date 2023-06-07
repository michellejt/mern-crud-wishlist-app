import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

import { URL } from "../App"

function ShowWishDetails(props) {
  const [wish, setWish] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL}/api/wishes/${id}`)
      .then((res) => {
        setWish(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowWishDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`${URL}/api/wishes/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowWishDetails_deleteClick');
      });
  };

  const WishItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{wish.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>image</td>
            <td>{wish.image}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>description</td>
            <td>{wish.description}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>link</td>
            <td>{wish.link}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>price</td>
            <td>{wish.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowWishDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Wish List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Wish details</h1>
            <p className='lead text-center'>View Wish Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{WishItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(wish._id);
              }}
            >
              Delete Wish
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-wish/${wish._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Wish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ShowWishDetails;