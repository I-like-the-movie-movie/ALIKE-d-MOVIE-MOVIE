<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './List.css';

import { useNavigate } from 'react-router-dom';

const List = () => {
  // const [review, setReview] = useState({
  //   movie_title: "",
  // });
  const [reviews, setReviews] = useState(null);

  const fetchReviews = async () => {
    const { data } = await axios.get('http://localhost:3001/reviews');
    setReviews(data);
    console.log('bbbb');
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div>
        {reviews?.map(review => (
          // <div onClick={() => {
          //   navigate('/review')}}>
          // <div onClick={() => {
          //   navigate(`/review/${review.id}`)}}>
          <div
            onClick={() => {
              navigate('/review');
            }}>
            {/* review페이지로 보내고, review.id를 같이 보내서 
          review페이지에서 reviews도 받아와서 reviews.id 등등을 띄움 */}

            <div key={review.id}>{review.movie_title}</div>
            <div key={review.id}>{review.picture}</div>
            {/* <image key={review.id} source={{uri:{review.picture}}} /> */}

            <div key={review.id}>{review.star}</div>
            {/* <image source={{uri : {review.picture}}} /> */}
          </div>
        ))}
      </div>
    </>
=======
import React, { useEffect } from "react";
import { __getReviews } from "../Redux/modules/reviewSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import Lists from "./Lists";

const List = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const reviews = useSelector((state) => state.reviews.reviews);

  console.log("reviews=", reviews);

  useEffect(() => {
    dispatch(__getReviews());
  }, [dispatch]);

  return (
    <Divbox>
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
        {reviews.map((review) => (
          <Lists key={review.id} {...review} />
        ))}
      </div>
    </Divbox>
>>>>>>> 19d3394ce136104f56033bbf09422ad8acc8913e
  );
};

const Divbox = styled.div`
  margin: 0px;
`;
const Logobox = styled.div`
  width: 350px;
  margin: 0px auto 0 auto;
`;

export default List;
