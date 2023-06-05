import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const WishCard = (props) => {
  const wish = props.wish;

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Wishes'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-wish/${wish._id}`}>{wish.title}</Link>
        </h2>
        <h3>{wish.image}</h3>
        <p>{wish.description}</p>
        <p>{wish.price}</p>
      </div>
    </div>
  );
};

export default WishCard;