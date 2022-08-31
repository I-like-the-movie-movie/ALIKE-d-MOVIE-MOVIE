import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Reviews = ({ id, movie_title, star, content, picture }) => {
  const navigate = useNavigate();

  console.log(movie_title);

  return (
    <div>
      <div
        onClick={() => {
          navigate(`/review/${id}`);
        }}
      >
        <h1>title ddd</h1>
        {movie_title}
        <h1>star</h1>
        {star === "1" ? (
          <Star>⭐️</Star>
        ) : star === "2" ? (
          <Star>⭐️⭐️</Star>
        ) : star === "3" ? (
          <Star>⭐️⭐️⭐️</Star>
        ) : star === "4" ? (
          <Star>⭐️⭐️⭐️⭐️</Star>
        ) : star === "5" ? (
          <Star>⭐️⭐️⭐️⭐️⭐️</Star>
        ) : (
          star
        )}

        <h1>content</h1>
        {content}
      </div>
      <p>
        <button>put</button> <button>del</button>
      </p>
    </div>
  );
};

const Star = styled.h2`
  color: #e3e32a;
`;

export default Reviews;
