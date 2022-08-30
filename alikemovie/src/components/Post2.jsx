
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios"; 
import { __postReviews } from "../Redux/modules/reviewSlice";
import { useDispatch, useSelector } from "react-redux";
import { reviewsSlice } from "../Redux/modules/reviewSlice";
import { __getReviews } from "../Redux/modules/reviewSlice";

function Post2() {

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    dispatch(__getReviews)
  }, [dispatch]);

  const onSubmitHandler = (review) => {
    axios.post("http://localhost:3001/reviews", review)
    console.log(review);
    console.log('dddd')
  };

  const { isLoading, error, reviews } = useSelector((state) => state.reviews);
  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  // console.log({reviews})
  // console.log({reviewsSlice})

  return (
    <div>
    <div>

        <form
        onSubmit={(e) => {
					// 👇 submit했을 때 브라우저의 새로고침을 방지합니다. 
          e.preventDefault();
          // console.log(review);
          onSubmitHandler(reviews);
          console.log(reviews);

        }}
      >
        <input
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            console.log(value)
            // __postReviews({
            //   ...__postReviews,
            //   movie_title: value
            // })
            __postReviews({value})

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
        post2
      </div>
      <div>
        {reviews?.map((review) => (
          <div key={review.id}>{review.movie_title}</div>
        ))}
      </div>




      </div>

   </div>
  );
}

export default Post2;