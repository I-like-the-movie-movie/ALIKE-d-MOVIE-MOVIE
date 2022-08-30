import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __postReviews } from "../Redux/modules/reviewSlice";
import { __getReviews } from "../Redux/modules/reviewSlice";

function Post2() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getReviews());
  }, [dispatch]);

  const { isLoading, error, reviews } = useSelector((state) => state.reviews);
  if (isLoading) {
    return <div>로딩 중....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  const onSubmitHandler = (review) => {
    axios.post("http://localhost:3001/reviews", review);
  };

  return (
    <form className="Form">
      <div>
        <form
          onSubmit={(e) => {
            // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
            e.preventDefault();
            onSubmitHandler(__getReviews);
          }}
        >
          <input
            type="text"
            onChange={(ev) => {
              const { value } = ev.target;
              __postReviews({
                ...__postReviews,
                movie_title: value,
              });
            }}
          />
          <button>제목추가하기</button>
        </form>
        <div>
          {reviews?.map((review) => (
            <div key={review.id}>{review.movie_title}</div>
          ))}
        </div>
      </div>
    </form>
  );
}

export default Post2;
