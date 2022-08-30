import React, { useEffect } from "react";
import { __getReviews } from "../Redux/modules/reviewSlice";
import { reviewsSlice } from "../Redux/modules/reviewSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const List2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  console.log({reviews})
  console.log({reviewsSlice})
  // console.log({dispatch})
  // console.log({PayloadAction})

  


  return (
    
      <div>
        <div>
        {reviews?.map((review) => (
          <div onClick={() => {
          navigate(`/review/${review.id}`)}}>
          
            <div key={review.id}>{review.movie_title}</div>
            <div key={review.id}>{review.picture}</div>
            <div key={review.id}>{review.star}</div>          
          </div>
          ))}
        </div>
      {/* <div>List2</div>;  */}
    </div>
  )

};

export default List2;