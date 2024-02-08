import React, { useState } from 'react';
import {reviews} from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);    
  const {name, job, image, text} = reviews[index];

 

  const nextPerson = () => {
    if(index + 1 < reviews.length){
    setIndex((prev) => prev + 1)}
    else return;
  }
const prevPerson = () => {
    if(index > 0) {
    setIndex((prev) => prev - 1)
    }
    else return;
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if(randomNumber === index) {
      randomNumber = index + 1;
    }
    // setIndex(checkNumber(randomNumber))
  }

  return (<article className='review' >
    <div className="img-container">
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className='author'> {name} </h4>
    <p className='job'> {job} </p>
    <p className='info' > {text} </p>
    <div className="button-container">
      <button className='prev-btn' onClick={prevPerson} >
        <FaChevronLeft/>
      </button>
       <button className='next-btn' onClick={nextPerson} >
        <FaChevronRight/>
      </button>
       </div>
       <button className='random-btn' onClick={randomPerson}> suprise me </button>
  </article>
  );
};

export default Review;
