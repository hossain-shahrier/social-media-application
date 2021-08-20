import React from "react";
import "../people.css";

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <article className="card-article">
      <img src={avatar_url} alt={login} />
      <h4>${login}</h4>
      <button href={html_url} className="card-button">
        view profile
      </button>
      <br />
      <br />
      <button className="card-button">Add</button>
      <br />
      <br />
      <button className="card-button">Message</button>
    </article>
  );
};

export default Follower;
