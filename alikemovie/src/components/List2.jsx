import React, { useEffect } from "react";
import { __getReviews } from "../Redux/modules/reviewSlice";
import { __putReviews } from "../Redux/modules/reviewSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

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

  return (
    <div>
      <header>
        <Wrap>
          <img className="logo" src={Logo} alt="로고" />
        </Wrap>{" "}
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
        {reviews?.map((review) => (
          <Div>
            <div
              onClick={() => {
                navigate(`/review/${review.id}`);
              }}
            >
              <div key={review.id}>{review.movie_title}</div>
              <div key={review.id}>{review.star}</div>
              <div key={review.id}>{review.picture}</div>
            </div>
            <p>
              <button>put</button> <button>del</button>
            </p>
          </Div>
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
