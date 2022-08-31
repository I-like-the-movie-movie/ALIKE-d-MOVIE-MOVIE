import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const Lists = ({ id, movie_title, star, content, picture }) => {
  const navigate = useNavigate();

  let params = useParams();
  console.log(params);

  return (
    <Divbox>
      <div
        onClick={() => {
          navigate(`/Review/${id}`);
        }}
      >
        <div>{picture}</div>
        <div>
          <h1>title</h1>
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
        </div>
      </div>
      <p>
        <button>put</button> <button>del</button>
      </p>
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
