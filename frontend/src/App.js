import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateWish from './components/CreateWish.js';

import ShowWishDetails from './components/ShowWishDetails';
import UpdateWishInfo from './components/UpdateWishInfo';
import ShowWishList from './components/ShowWishList';

export const URL = process.env.REACT_APP_SERVER_URL

const App = () => {
  return (
    <Router>
      <div className='flex flex-col place-content-center items-center'>
        <Routes>
          <Route exact path='/' element={<ShowWishList />} />
          <Route path='/create-wish' element={<CreateWish />} />
          <Route path='/edit-wish/:id' element={<UpdateWishInfo />} />
          <Route path='/show-wish/:id' element={<ShowWishDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;