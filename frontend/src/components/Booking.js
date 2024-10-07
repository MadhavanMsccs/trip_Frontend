// import React,{useState,useContext} from "react";
// import "./booking.css";
// import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
// import{ useNavigate} from 'react-router-dom'
// import { AuthContext } from "../context/AuthContext";
// import { BASE_URL } from "../utils/config";

// const Booking = ({ tour, avgRating }) => {
//   const { price, reviews, title } = tour;
//   const navigate = useNavigate();

//   const {user} = useContext(AuthContext)

//   const [booking,setBooking]=useState({
//     userId: user && user._id,
//     userEmail: user && user.email,
//     tourName: title,
//     fullName:'',
//     phone:'',
//     guestSize:1,
//     bookAt:''
//   });

//   const handleChange = (e) => {
//     setBooking(prev=>({...prev,[e.target.id]:e.target.value}))
//   };

//   const serviceFee = 10;
//   const totalAmount = Number(price)*Number(booking.guestSize)+Number(serviceFee)

//   const handleClick = async e=>{
//     e.preventDefault();

//     console.log(booking)

//     try {
//       if(!user || user === undefined || user === null){
//         return alert('Please sign in')
//       }

//       const res = await fetch(`${BASE_URL}/booking`,{
//         method:'post',
//         headers:{
//           'content-type':'application/json'
//         },
//         credentials:'include',
//         body:JSON.stringify(booking)
//       })

//       const result = await res.json()

//       if(!res.ok){
//         return alert(result.message)
//       }
//       navigate("/thank-you");

//     } catch (err) {
//       alert(err.message)
//     }
    
//   }

//   return (
//     <div className="booking">
//       <div className="booking__top d-flex align-items-center justify-content-between">
//         <h3>
//           ${price} <span> /per person</span>
//         </h3>
//         <span className="tour__rating d-flex align-items-center ">
//           <i class="ri-star-s-fill"></i>
//           {avgRating === 0 ? null : avgRating} ({reviews?.length})
//         </span>
//       </div>

//       {/* booking form */}

//       <div className="booking__form">
//         <h5>Information</h5>
//         <Form className="booking__info-form" onSubmit={handleClick}>
//           <FormGroup>
//             <input
//               type="text"
//               placeholder="Full Name"
//               id="fullName"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//         </Form>
//         <Form className="booking__info-form">
//           <FormGroup>
//             <input
//               type="number"
//               placeholder="Phone"
//               id="phone"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//         </Form>
//         <Form className="booking__info-form">
//           <FormGroup className="d-flex align-items-center gap-3">
//             <input
//               type="date"
//               placeholder=""
//               id="bookAt"
//               required
//               onChange={handleChange}
//             />
//             <input
//               type="number"
//               placeholder="Guest"
//               id="guestSize"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//         </Form>
//       </div>

//       {/* booking bottom */}

//       <div className="booking__bottom">
//         <ListGroupItem className="border-0 px-0">
//           <h5 className="d-flex align-items-center gap-1">
//             ${price} <i class="ri-close-line"></i> 1 person
//           </h5>
//           <span>${price}</span>
//         </ListGroupItem>
//         <ListGroupItem className="border-0 px-0">
//           <h5>Service charge</h5>
//           <span>${serviceFee}</span>
//         </ListGroupItem>
//         <ListGroupItem className="border-0 px-0 total">
//           <h5>Total</h5>
//           <span>${totalAmount}</span>
//         </ListGroupItem>

//         <button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</button>
//       </div>
//     </div>
//   );
// };

// export default Booking;
import React, { useState, useContext } from "react";
import "./booking.css";
import { useBookingContext } from '../context/BookingContext.js';
import { Form, FormGroup, ListGroupItem } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";
import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Load your publishable key from Stripe
const stripePromise = loadStripe("pk_test_51Q5S1sDGulvCS4dB47DOdrlE7DDMEG1I4QFP2amgIkPm3Feh2y3aTnxOSBJrXCqTCgojeDsdMXOodXNs4oyMnwDk00kNwaKljR");

const BookingForm = ({ tour }) => {
  const { price, title } = tour;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();

  const [booking, setBooking] = useState({
    userId: user ? user._id : "", // Optional
    userEmail: user ? user.email : "", // Optional
    tourName: title,
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: '',
  });

  const handleChange = (e) => {
    setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount = (Number(price) * Number(booking.guestSize) + Number(serviceFee)) * 100; // Stripe expects amount in cents

  const handleClick = async (e) => {
    e.preventDefault();

    if (!booking.fullName || !booking.phone || !booking.bookAt || !booking.guestSize) {
      return alert('Please fill in all required fields.');
    }

    if (!stripe || !elements) {
      return alert('Stripe is not loaded');
    }

    try {
      const cardElement = elements.getElement(CardElement);
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        return alert(error.message);
      }

      const payload = {
        amount: totalAmount, // amount in cents
        currency: "usd", // Send currency
        paymentMethodId: paymentMethod.id, // Stripe Payment Method ID
        tourDetails: {
          ...booking, // Pass the rest of the booking details
        },
      };

      const res = await axios.post(`${BASE_URL}/booking`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // Ensure cookies are included
      });

      if (res.status !== 200) {
        return alert(res.data.message || 'Failed to create booking');
      }

      alert('Booking created successfully');
      navigate("/thank-you");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <Form className="booking__info-form" onSubmit={handleClick}>
      <FormGroup>
        <input
          type="text"
          placeholder="Full Name"
          id="fullName"
          required
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <input
          type="number"
          placeholder="Phone"
          id="phone"
          required
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="d-flex align-items-center gap-3">
        <input
          type="date"
          id="bookAt"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Guest"
          id="guestSize"
          min="1"
          required
          onChange={handleChange}
        />
      </FormGroup>

      {/* Stripe Elements - Card Element */}
      <FormGroup>
        <label>Card Details</label>
        <CardElement />
      </FormGroup>

      <div className="booking__bottom">
        <ListGroupItem className="border-0 px-0">
          <h5 className="d-flex align-items-center gap-1">
            ${price} <i className="ri-close-line"></i> {booking.guestSize} guest(s)
          </h5>
          <span>${price}</span>
        </ListGroupItem>
        <ListGroupItem className="border-0 px-0">
          <h5>Service charge</h5>
          <span>${serviceFee}</span>
        </ListGroupItem>
        <ListGroupItem className="border-0 px-0 total">
          <h5>Total</h5>
          <span>${(totalAmount / 100).toFixed(2)}</span>
        </ListGroupItem>
        <button className="btn primary__btn w-100 mt-4" type="submit" disabled={!stripe}>
          Book Now
        </button>
      </div>
    </Form>
  );
};

const Booking = (props) => (
  <Elements stripe={stripePromise}>
    <BookingForm {...props} />
  </Elements>
);

export default Booking;
