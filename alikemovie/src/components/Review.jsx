// import Logo from "../assets/logo.svg";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deleteReviews, __getReviews, __putReviews } from "../Redux/modules/reviewSlice";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import axios from "axios";


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

  const onClickPutButtonHandler = (movieID) => {
    console.log(movieID)
    // dispatch(__putReviews((movieID)))
    alert("내용을 수정해주세요!")
    navigate(`/put/${movieID}`)
    // console.log(    dispatch(__deleteReviews()))
    // console.log(typeof(params.id))
    // console.log(params.id)
    // console.log(params)
  };

  let params = useParams();

  const reviews = useSelector((state) => state.reviews.reviews);

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
          <img className="logo" src={Logo} alt="로고" />
        </Logobox>
        <button
          className="now_movie_list"
          onClick={() => {
            navigate("/");
          }}
        >
          home
        </button>
      </header>
      <Reviews>
        {reviews
          .filter((el) => el.id === params.id)
          .map(
            (reviews) => (
              console.log("movie_title", reviews.movie_title),
              (
                <div key={reviews.id} >
                  <h1>post</h1>
                  <img src={reviews.picture} alt="poster"/>
                  <h1>title</h1>
                  <p>{reviews.movie_title}</p>
                  <h1>star</h1>
                  <p>{reviews.star}</p>
                  <h1>content</h1>
                  <p>{reviews.content}</p>

                  <div>
                    
                    <button
                      type="button"
                      onClick={() => onClickDeleteButtonHandler(params.id)}
                    >del</button>
                  </div>
                  <div>
                  <button
                      type="button"
                      onClick={() => onClickPutButtonHandler(params.id)}
                    >put</button>

                  </div>
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
  margin: 3%;
  padding: 10px;
`;

export default Review;
