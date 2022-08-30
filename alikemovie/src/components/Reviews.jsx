import React from "react";
import { useNavigate } from "react-router-dom";

const Reviews = ({ id, movie_title, star, content, picture }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        onClick={() => {
          navigate(`/review/${id}`);
        }}
      >
        <div>{movie_title}</div>
        <div>{star}</div>
        <div>{content}</div>
        <img src={picture} />
      </div>
      <p>
        <button>put</button> <button>del</button>
      </p>
    </div>
  );
};

export default Reviews;
