// import Logo from "../assets/logo.svg";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getReviews } from '../Redux/modules/reviewSlice';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';

const Review = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let params = useParams();

  const reviews = useSelector(state => state.reviews.reviews);

  useEffect(() => {
    dispatch(__getReviews());
  }, [dispatch]);
  
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
          ?.filter(el => el.id === params.id)
          ?.map(
            reviews => (
              console.log('movie_title', reviews.movie_title),
              (
                <div>
                  <h1>post</h1>
                  <img src={reviews.picture} />
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
                  <p>
                    <button>put</button> <button>del</button>
                  </p>
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
