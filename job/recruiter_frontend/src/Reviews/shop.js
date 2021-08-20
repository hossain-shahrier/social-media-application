import React from "react";
import Review from "./Review";
import "../review.css";
function shop() {
  return (
    <main className="review-main">
      <section className="review-section-container">
        <div className="review-section-title">
          <h2>our reviews</h2>
          <div className="review-section-underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default shop;
