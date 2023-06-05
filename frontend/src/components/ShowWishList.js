import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import WishCard from './WishCard';

function ShowWishList() {
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/wishes')
      .then((res) => {
        setWishes(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowWishList');
      });
  }, []);

  const wishList =
    wishes.length === 0
      ? 'there is no wish record!'
      : wishes.map((wish, k) => <WishCard wish={wish} key={k} />);

  return (
    <div className='ShowWishList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Wish List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-wish'
              className='btn btn-outline-warning float-right'
            >
              + Add New Wish
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{wishList}</div>
      </div>
    </div>
  );
}

export default ShowWishList;