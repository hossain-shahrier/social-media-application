import { Navbar, Container, Nav } from "react-bootstrap";
import React, { useState } from "react";
import "../second.css";
import { categories } from "./data";
import { Link } from "react-router-dom";

export const Jobpost = () => {
  // const [categories, setCategories] = useState();

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Job Access</h2>
          <div className="underline"></div>
        </div>
      </section>
      <div className="btn-container">
        <ul className="links">
          {categories.map((category) => {
            const { id, url, text } = category;
            return (
              // <li key={id}>
              //   <a href={url}>{text}</a>/

              //   <Link to="/" key={id}>
              //     {text}

              //   </Link>
              // </li>

              <button type="button" className="filter-btn" key={id}>
                {/* {url} */}
                {/* {text} */}
                <Link to={url} key={id}>
                  {text}
                </Link>
              </button>
            );
          })}
        </ul>
      </div>
    </main>
  );
};
