import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResult from '../pages/SearchResult';
import TourDetails from '../pages/TourDetails';
import Tours from '../pages/Tours';
import ThankYou from '../pages/ThanYou';
import BookingDetails from '../components/details.js';

function Routers() {
  const stripePromise = loadStripe('pk_test_51Q5S1sDGulvCS4dB47DOdrlE7DDMEG1I4QFP2amgIkPm3Feh2y3aTnxOSBJrXCqTCgojeDsdMXOodXNs4oyMnwDk00kNwaKljR');

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/tours' element={<Tours />} />
      <Route 
        path='/tours/:id' 
        element={
          <Elements stripe={stripePromise}>
            <TourDetails />
          </Elements>
        } 
      />
      <Route 
        path='/bookings' 
        element={<BookingDetails />} // Pass booking data through location state
      />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/thank-you' element={<ThankYou />} />
      <Route path='/tours/search' element={<SearchResult />} />
    </Routes>
  );
}

export default Routers;
