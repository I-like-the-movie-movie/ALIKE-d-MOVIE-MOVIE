// import Logo from "../assets/logo.svg";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

import React from "react";
import { useDispatch } from "react-redux";

const Review = ({ star, movie_title, picture, content }) => {
  const dispatch = useDispatch();

  dispatch(__getReviews);

  console.log("title=", movie_title);

  return (
    <div>
      <div>
        <h1>title</h1>
        {movie_title}

        <h1>content</h1>
        {content}
      </div>
    </div>
  );
};

export default Review;
