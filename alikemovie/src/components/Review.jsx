// import Logo from "../assets/logo.svg";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __deleteReviews,
  __getReviews,
  __putReviews,
} from "../Redux/modules/reviewSlice";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

const Review = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickDeleteButtonHandler = (movieID) => {
    console.log(movieID);
    dispatch(__deleteReviews(movieID));
    navigate("/list");
  };
  const onClickPutButtonHandler = (movieID) => {
    console.log(movieID);
    dispatch(__putReviews(movieID));
  };

  let params = useParams();

  const reviews = useSelector((state) => state.reviews.reviews);

  useEffect(() => {
    dispatch(__getReviews());
  }, [dispatch]);

  return (
    <div>
      <header>
        <Logobox>
          <img className="logo" src={Logo} alt="로고" />
        </Logobox>
        <button
          className="now_movie_list"
          onClick={() => {
            navigate("/list");
          }}
        >
          영화들보러 가기
        </button>
      </header>
      <Reviews>
        {reviews
          ?.filter((el) => el.id === params.id)
          ?.map((reviews) => (
            <div key={reviews.id}>
              <img
                src={reviews.picture}
                alt="poster"
                width="170"
                height="200"
              />
              <h2>title</h2>
              <p>{reviews.movie_title}</p>
              <h2>star</h2>
              <p>{reviews.star}</p>
              <p>
                {reviews.star === "1" ? (
                  <Star>⭐️</Star>
                ) : reviews.star === "2" ? (
                  <Star>⭐️⭐️</Star>
                ) : reviews.star === "3" ? (
                  <Star>⭐️⭐️⭐️</Star>
                ) : reviews.star === "4" ? (
                  <Star>⭐️⭐️⭐️⭐️</Star>
                ) : reviews.star === "5" ? (
                  <Star>⭐️⭐️⭐️⭐️⭐️</Star>
                ) : (
                  reviews.star
                )}
              </p>
              <h2>description</h2>
              <p>{reviews.desc}</p>
              <h2>content</h2>
              <p>{reviews.content}</p>
              <p>
                <button
                  type="button"
                  onClick={() => onClickPutButtonHandler(params.id)}
                >
                  Put
                </button>{" "}
                <button
                  type="button"
                  onClick={() => onClickDeleteButtonHandler(params.id)}
                >
                  Del
                </button>
              </p>
            </div>
          ))}
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
