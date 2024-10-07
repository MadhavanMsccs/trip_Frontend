import React from 'react'
import Slider from 'react-slick'
import ava01 from '../assets/images/ava-1.jpg'
import ava02 from '../assets/images/ava-2.jpg'
import ava03 from '../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
       dots:true,
       infinite:true,
       autoplay:true,
       speed:1000,
       swipeToSlide:true,
       autoplaySpeed:2000,
       slidesToShow:3,

       responsive:[
        {
            breakpoint:992,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite:true,
                dots:true,
            },
        },
        {
            breakpoint:576,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            },
        },
       ]
    }
  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
        <p>I recently took the "Barcelona Highlights Tour" and it was absolutely fantastic! Our guide, Javier, was incredibly knowledgeable and passionate about the city. He made the history come alive with interesting stories and fun facts about each landmark.</p>

           <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
              <div>
                <h6 className='mb-0 mt-3'>John Deo</h6>
                <p>Customer</p>
              </div>
           </div>
        </div>

        <div className="testimonial py-4 px-3">
        <p>The tour started at the Sagrada Família, and seeing this architectural marvel up close was breathtaking. Javier provided insights into Gaudí’s vision and the ongoing construction, which added so much depth to the experience.</p>


           <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
              <div>
                <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                <p>Customer</p>
              </div>
           </div>
        </div>

        <div className="testimonial py-4 px-3">
        <p>Our safari tour in Kruger National Park was simply unforgettable! Our guide, Thabo, was a wildlife expert who made every moment exciting. We saw the Big Five (lion, leopard, elephant, buffalo, and rhino) within the first two days!</p>


           <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
              <div>
                <h6 className='mb-0 mt-3'>Homelander</h6>
                <p>Customer</p>
              </div>
           </div>
        </div>

        <div className="testimonial py-4 px-3">
        <p>We visited three different wineries, each with its unique charm. The tastings were generous, and the staff at the wineries were knowledgeable about their wines. The lunch included in the tour was delicious and paired perfectly with the wines we tasted.</p>

           <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
              <div>
                <h6 className='mb-0 mt-3'>John Deo</h6>
                <p>Customer</p>
              </div>
           </div>
        </div>

        <div className="testimonial py-4 px-3">
        <p>We visited iconic sites like the Tower of London, Buckingham Palace, and Westminster Abbey. Rebecca shared fascinating tales of British history, and her enthusiasm made the tour engaging and fun.</p>

           <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
              <div>
                <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                <p>Customer</p>
              </div>
           </div>
        </div>

        <div className="testimonial py-4 px-3">
        <p>Our week-long stay at a beachfront resort in Bali was pure paradise! The resort staff was incredibly welcoming, and the amenities were top-notch. We enjoyed daily yoga sessions and spa treatments, which made our trip feel like a true getaway.</p>

           <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
              <div>
                <h6 className='mb-0 mt-3'>Homelander</h6>
                <p>Customer</p>
              </div>
           </div>
        </div>
    </Slider>
  )
}

export default Testimonials