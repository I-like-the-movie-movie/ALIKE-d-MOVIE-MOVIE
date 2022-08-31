// import Logo from "../assets/logo.svg";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getReviews } from '../Redux/modules/reviewSlice';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';
=======
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deleteReviews, __getReviews } from "../Redux/modules/reviewSlice";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import axios from "axios";

>>>>>>> 4be2f81fcde7b4e1b386b3e0db678d6b5245e92c

const Review = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickDeleteButtonHandler = (movieID) => {
    console.log(movieID)
    dispatch(__deleteReviews((movieID)))
    alert("삭제가 완료 되었습니다!")
    navigate("/list")
    // console.log(    dispatch(__deleteReviews()))
    console.log(typeof(params.id))
    console.log(params.id)
    console.log(params)
  };

  let params = useParams();

  const reviews = useSelector(state => state.reviews.reviews);

  useEffect(() => {
    // dispatch(__deleteReviews())
    dispatch(__getReviews());
  }, [dispatch]);

  const commentHandle = (e) => {
    // setComment(e.target.value)
  }
    // useEffect(() => {
    //   fetchComments();
    //   dispatch(__getComments(params));
    // }, []);

    // const fetchDetailReviews = async () => {
    //   // const { data } = await axios.get("http://localhost:3001/reviews",{Id:param?.id});
    //   setDetailReviews(data);
    // };



  return (
    <div>
      <header>
        <Logobox>
          <img className='logo' src={Logo} alt='로고' />
        </Logobox>
        <button
          className='now_movie_list'
          onClick={() => {
            navigate('/');
          }}>
          home
        </button>
      </header>
      <Reviews>
        {reviews
<<<<<<< HEAD
          ?.filter(el => el.id === params.id)
          ?.map(
            reviews => (
              console.log('movie_title', reviews.movie_title)
=======
          .filter((el) => el.id === params.id)
          .map(
            (reviews) => (
              console.log("movie_title", reviews.movie_title),
>>>>>>> 4be2f81fcde7b4e1b386b3e0db678d6b5245e92c
              (
                <div key={reviews.id} >
                  <h1>post</h1>
<<<<<<< HEAD
                  <img src={reviews.picture} alt='poster' />
=======
                  <img src={reviews.picture} alt="poster"/>
>>>>>>> 4be2f81fcde7b4e1b386b3e0db678d6b5245e92c
                  <h1>title</h1>
                  <p>{reviews.movie_title}</p>
                  <h1>star</h1>
                  <p>{reviews.star}</p>
                  <p>
                    {reviews.star === '1' ? (
                      <Star>⭐️</Star>
                    ) : reviews.star === '2' ? (
                      <Star>⭐️⭐️</Star>
                    ) : reviews.star === '3' ? (
                      <Star>⭐️⭐️⭐️</Star>
                    ) : reviews.star === '4' ? (
                      <Star>⭐️⭐️⭐️⭐️</Star>
                    ) : reviews.star === '5' ? (
                      <Star>⭐️⭐️⭐️⭐️⭐️</Star>
                    ) : (
                      reviews.star
                    )}
                  </p>
                  <h1>description</h1>
                  <p>{reviews.desc}</p>
                  <h1>content</h1>
                  <p>{reviews.content}</p>
<<<<<<< HEAD
                  <p>
                    <button>put</button> <button>del</button>
                  </p>
=======

                  <p>
                    <button>put</button>
                  </p>
                  <div>
                    
                    <button
                      type="button"
                      onClick={() => onClickDeleteButtonHandler(params.id)}
                    >del</button>
                  </div>
>>>>>>> 4be2f81fcde7b4e1b386b3e0db678d6b5245e92c
                </div>
              )
            )
          )}
      </Reviews>
    </div>
  );
};

const Logobox = styled.div`
  width: 350px;
  margin: 0px auto 0 auto;
`;
const Reviews = styled.div`
  border: 1px solid;
  border-radius: 30px;
  text-align: center;
  margin: 3%;
  padding: 10px;
`;

const Star = styled.h2`
  color: #e3e32a;
`;
export default Review;
