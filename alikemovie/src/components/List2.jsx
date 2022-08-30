import React, { useEffect } from "react";
import { __getReviews } from "../Redux/modules/reviewSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import Reviews from "./Reviews";

const List2 = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const reviews = useSelector((state) => state.reviews.reviews);

  console.log(reviews);

  useEffect(() => {
    dispatch(__getReviews());
  }, [dispatch]);

  return (
    <div>
      <header>
        <div>
          <img className="logo" src={Logo} alt="로고" />
        </div>
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
          <Reviews key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Logobox = styled.div`
  width: 350px;
  margin: 100px auto 0 auto;
`;

const Div = styled.div`
  border: 1px solid;
  border-radius: 20px;
  /* text-align: center; */
  margin: 10px;
  padding: 10px;
`;

export default List2;
