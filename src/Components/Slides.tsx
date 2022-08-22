import React from 'react'
import {Carousel, CarouselItem, Fade} from 'react-bootstrap'
import img from '../Images/buid.jpg'
import img2 from '../Images/build2.jpg'
import img3 from '../Images/build3.jpg'

export default function Slides() {
  return (
    <div>
     
    <Carousel >
    
      <Carousel.Item className='Carousel'>
        <img
          className="Carousel d-block w-100"
          src={img3}
          alt="First slide"
        />
        <Carousel.Caption>
        
    <div className='center'>
    <h2>FIND A PERFECT DREAM HOUSE</h2>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
      
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perferendis ex nulla vero praesentium perspiciatis sed 
       
        </p>

        <a href='/'>View Properties</a>
        </div>
     
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=''>
        <img
          className="Carousel d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className='center'>
        <h2>FIND A PERFECT DREAM HOUSE</h2>
   
      <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
      
     
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perferendis ex nulla vero praesentium perspiciatis sed 
        
        </p>

        <a href='/'>View Properties</a>
        </div>
      
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className=''>
        <img
          className="Carousel d-block w-100"
          src={img}
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className='center'>
    <h2>FIND A PERFECT DREAM HOUSE</h2>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
      
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perferendis ex nulla vero praesentium perspiciatis sed 
        
        </p>

        <a href='/'>View Properties</a>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  );
}


