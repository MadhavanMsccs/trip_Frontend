import React from 'react'
import '../styles/home.css'
import {Container,Row,Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from '../shared/Subtitle'
// import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/FeaturedTourList'
import MasonryimagesGallery from '../components/image-gallery/MasonryimagesGallery'
import Testimonials from '../components/Testimonials'
import Newsletter from '../shared/Newsletter'

function Home() {
  return (
    <>
           {/* hero section  */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                  <div className="hero__subtitle d-flex align-items-center">
                    <Subtitle subtitle={'know Before You Go'}/>
                    <img src={worldImg} alt="world" />
                  </div>
                  <h1>Traveling opens the door to creating <span className="hignlight">memories</span></h1>
                  <p>Travel gives us our greatest stories, our most cherished memories and countless irreplaceable learnings that we can choose to pay forward to others.</p>
                  <p><bold>Let's Find Some Beautiful Place to Get Lost</bold></p>
              </div>
            </Col>

            <Col lg='2'>
             <div className="hero__img-box">
              <img src={heroImg} alt="" />
             </div>
            </Col>
            <Col lg='2'>
             <div className="hero__img-box hero__video-box mt-4">
              <video src={heroVideo} alt="" controls />
             </div>
            </Col>
            <Col lg='2'>
             <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
             </div>
            </Col>

            {/* <SearchBar/> */}
          </Row>
        </Container>
      </section>

                {/* hero section  */}
        <section>
          <Container>
            <Row>
              <Col lg='3'>
               <h5 className="services__subtitle">What we serve</h5>
               <h2 className='services__title'>We offer our best services</h2>
              </Col>
              <ServiceList/>
            </Row>
          </Container>
        </section>

             {/* featured tour section  */}

        <section>
          <Container>
            <Row>
              <Col lg='12' className='mb-5'>
                <Subtitle subtitle={'Explore'}/>
                <h2 className="featured__tour-title">Our featured tours</h2>
              </Col>
              <FeaturedTourList/>
            </Row>
          </Container>
        </section>

            {/* experience section  */}

        <section>
          <Container>
            <Row>
              <Col lg='6'>
                <div className="experience__content">
                  <Subtitle subtitle={'Experience'}/>

                  <h2>With our all experience <br/> we will serve you</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, dolore!.
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <div className="counter__wrapper d-flex align-items-center gap-5">
                  <div className="counter__box">
                    <span>12k+</span>
                    <h6>Successful Trip</h6>
                  </div>
                  <div className="counter__box">
                    <span>2k+</span>
                    <h6>Regular Trip</h6>
                  </div>
                  <div className="counter__box">
                    <span>15</span>
                    <h6>Years experience</h6>
                  </div>
                </div>
              </Col>
              <Col lg='6'>
                <div className="experience__img">
                  <img src={experienceImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

            {/* gallery section  */}

       <section>
        <container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryimagesGallery/>
            </Col>
          </Row>
        </container>
       </section>

       {/* testimonial section  */}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
             <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section> 
      
      <Newsletter />
    </>
  )
}

export default Home