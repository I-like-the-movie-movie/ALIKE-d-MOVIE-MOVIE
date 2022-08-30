import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { __getReviews } from '../Redux/modules/reviewSlice';
import { __postReviews } from '../Redux/modules/reviewSlice';
import { useDispatch, useSelector } from 'react-redux';

function Post2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getReviews);
    dispatch(__postReviews);
  }, [dispatch]);

  const onSubmitHandler = review => {
    console.log('aaaaa');
    axios.post('http://localhost:3001/reviews', review);
  };

  const { isLoading, error, reviews } = useSelector(state => state.reviews);
  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <form
        onSubmit={e => {
          console.log('ccc');
          // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
          onSubmitHandler(__getReviews);
          // e.preventDefault();
        }}>
        <input
          type='text'
          onChange={ev => {
            const { value } = ev.target;
            __postReviews({
              ...__postReviews,
              movie_title: value,
            });
          }}
        />
        <button>추가하기</button>
        {/* <div>
        {reviews?.map((review) => (
          <div key={review.id}>{review.movie_title}</div>
        ))}
      </div> */}
      </form>

      <div>
        {reviews?.map(review => (
          <div key={review.id}>{review.movie_title}</div>
        ))}
      </div>
    </div>
  );
}

export default Post2;
