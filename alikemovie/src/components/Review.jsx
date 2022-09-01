import React from "react";
import Logo from "../assets/logo.svg";
import styled from "styled-components";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { __getComments, __postComments } from "../Redux/modules/commentSlice";
import {
  __getReviews,
  __patchReviews,
  __deleteReviews,
} from "../Redux/modules/reviewSlice";

const Review = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [detailreviews, setDetailReviews] = useState(null);
  const param = useParams();
  const [comment, setComment] = useState("댓글달아보시지");
  const { id } = useParams();
  const paramsComment = parseInt(id);

  const onClickDeleteButtonHandler = (movieID) => {
    dispatch(__deleteReviews(movieID));
    alert("삭제가 완료 되었습니다!");
    navigate("/list");
  };

  const onClickPutButtonHandler = (movieID) => {
    console.log(movieID);
    alert("내용을 수정해주세요!");
    navigate("/put");
  };

  let params = useParams();

  const reviews = useSelector((state) => state.reviews.reviews);
  const comments = useSelector((state) => state.comments.comments);

  useEffect(() => {
    dispatch(__getReviews());
    dispatch(__getComments());
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
                </button>

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
