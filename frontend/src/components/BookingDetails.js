// src/context/BookingContext.js
import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBookingContext = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState(null);

  return (
    <BookingContext.Provider value={{ booking, setBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
