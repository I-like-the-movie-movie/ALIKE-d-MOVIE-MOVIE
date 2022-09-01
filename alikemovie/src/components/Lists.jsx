import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Lists = ({ id, movie_title, star, picture }) => {
  const navigate = useNavigate();

  return (
    <Divbox>
      <div
        onClick={() => {
          navigate(`/review/${id}`);
        }}
      >
        <div>
          <img src={picture} alt="poster" width="170" height="200" />
        </div>
        <div>
          <h2>title</h2>
          {movie_title}
          <h2>star</h2>
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
        </div>
      </div>
    </Divbox>
  );
};

const Divbox = styled.div`
  border: 1px solid;
  border-radius: 20px;
  text-align: center;
  margin: 2%;
  padding: 10px;
  min-width: 400px;
`;
const Star = styled.h2`
  color: #e3e32a;
`;

export default Lists;
