import React from 'react';
import './BookingDetails.css'; // Import your CSS file for styling

const BookingDetails = ({ booking }) => {
  const { tourName, fullName, phone, guestSize, bookAt, totalAmount } = booking;

  return (
    <div className="booking-details">
      <h2>Booking Summary</h2>
      <div className="details">
        <h3>Tour Details</h3>
        <p><strong>Tour Name:</strong> {tourName}</p>
        <p><strong>Date:</strong> {bookAt}</p>
        <p><strong>Guests:</strong> {guestSize}</p>

        <h3>Customer Information</h3>
        <p><strong>Name:</strong> {fullName}</p>
        <p><strong>Phone:</strong> {phone}</p>

        <h3>Payment Details</h3>
        <p><strong>Total Amount:</strong> ${totalAmount.toFixed(2)}</p>
      </div>
      <button className="btn confirm-btn">Confirm Booking</button>
    </div>
  );
};

export default BookingDetails;
