<<<<<<< HEAD
import styled from 'styled-components';
import axios from 'axios';
import Logo from '../assets/logo.svg';

import React, { useEffect, useRef } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { __getReviews } from '../Redux/modules/reviewSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Review({ star, movie_title, picture, content }) {
  const { id } = useParams();
  // const location = useLocation();
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews.reviews);

  
=======
// import Logo from "../assets/logo.svg";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getReviews } from "../Redux/modules/reviewSlice";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

const Review = ({ id, star, movie_title, picture, content }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let params = useParams();

  const reviews = useSelector((state) => state.reviews.reviews);
>>>>>>> f2e9e9349ffaca7311d0fcced07cf6bdc418b138

  useEffect(() => {
    dispatch(__getReviews());
  }, [dispatch]);

  const movieTitle = reviews.map(review => 
    <li key={review.id}>
      {review.movie_title}
    </li>
  )
  
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
      <div>
<<<<<<< HEAD
        <h1>title</h1>
        {movieTitle}
        <h1>star</h1>
        {star === '1' ? <Star defaultValue='★' /> : star}

        <h1>content</h1>
        {content}
=======
        {reviews
          ?.filter((el) => el.id === params.id)
          ?.map(
            (reviews) => (
              console.log("movie_title", reviews.movie_title),
              (
                <div>
                  {reviews.movie_title}
                  {reviews.star}
                  {reviews.content}
                  {reviews.picture}
                </div>
              )
            )
          )}
>>>>>>> f2e9e9349ffaca7311d0fcced07cf6bdc418b138
      </div>
    </div>
  );
};

const Logobox = styled.div`
  width: 350px;
  margin: 0px auto 0 auto;
`;

export default Review;
