// import Logo from "../assets/logo.svg";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getReviews } from "../Redux/modules/reviewSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

const Review = ({ id, star, movie_title, picture, content }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reviews = useSelector((state) => state.reviews.reviews);

  useEffect(() => {
    dispatch(__getReviews());
  }, [dispatch]);

  console.log("reviews =", reviews);
  // console.log("console.log = ", reviews.reviews[0]);

  return (
    <div>
      <header>
        <Logobox>
          <img className="logo" src={Logo} alt="로고" />
        </Logobox>
        <button
          className="now_movie_list"
          onClick={() => {
            navigate("/");
          }}
        >
          home
        </button>
      </header>
      <div>title</div>
    </div>
  );
};

const Logobox = styled.div`
  width: 350px;
  margin: 0px auto 0 auto;
`;

export default Review;
