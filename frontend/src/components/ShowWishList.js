import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import WishCard from './WishCard';

import { URL } from "../App"

function ShowWishList() {
  const [wishes, setWishes] = useState([]);

  

  useEffect(() => {
    axios
      .get(`${URL}/api/wishes`)
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

<div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">

<h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Michelle's</span> Wishlist 🥰</h1>
<Link to='/create-wish' className='bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs text-center py-3 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' type="button"> 
      <i className="fas fa-plus"></i> Add New Wish
</Link>

  {wishList}

</div>









  );
}

export default ShowWishList;