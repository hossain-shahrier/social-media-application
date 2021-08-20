import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "../review.css";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review-bar">
      <div className="review-img-container">
        <img src={image} alt={name} className="review-person-img" />
        <span className="review-quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="review-author">{name}</h4>
      <p className="review-job">{job}</p>
      <p className="review-info">{text}</p>
      <div className="review-button-container">
        <button className="review-prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="review-next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
