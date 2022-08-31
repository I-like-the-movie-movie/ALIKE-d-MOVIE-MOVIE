import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";

import { __postReviews, __getReviews, __patchReviews } from "../Redux/modules/reviewSlice";
import { nanoid } from "@reduxjs/toolkit";

function Put() {
  const dispatch = useDispatch();

  const titleInput = useRef(null);
  const contentInput = useRef(null);
  const pictureInput = useRef(null);
  const starInput = useRef(null);

  const reviews = useSelector((state) => state.reviews.reviews);
  let {id} = useParams();

  console.log(reviews)
  console.log(reviews[0].id)

  useEffect(() => {
    // dispatch(__deleteReviews())
    dispatch(__getReviews());
  }, []);
  // console.log(params.id)  


  const onClickHandler = (e) => {
    e.preventDefault();
    const editPost = {
      id  ,
      star: starInput.current.value,
      movie_title: titleInput.current.value,
      // picture: pictureInput.current.value,
      content: contentInput.current.value,
    };
    console.log(editPost)
    dispatch(__patchReviews(editPost));
  };

  const navigate = useNavigate();

  return (
    <Body>
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
      <Divleft onSubmit={onClickHandler}>
        <h1>title</h1>
        <input ref={titleInput} type="text" placeholder= "내용을 입력하세요."/>

        <h1> star </h1>
        <select name="star" ref={starInput}>
          <option>star</option>
          <option value="1">★</option>
          <option value="2">★★</option>
          <option value="3">★★★</option>
          <option value="4">★★★★</option>
          <option value="5">★★★★★</option>
        </select>

        <h1>contents</h1>
        <Textarea ref={contentInput} type="text" />

        <button>수정하기</button>
      </Divleft>
      <Divright>
        <h1> image </h1>
        <input ref={pictureInput} type="text"
        ></input>
        {/* <Preimg></Preimg> */}
      </Divright>
      <Divfoot></Divfoot>
    </Body>
  );
}

const Body = styled.div`
  /* border: 1px solid; */
  display: inline-block;

  width: 100%;
  min-width: 450px;
  height: 100%;
  max-height: 800px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Logobox = styled.div`
  width: 350px;
  margin: 100px auto 0 auto;
`;
const Divleft = styled.form`
  border: 1px solid;
  border-radius: 30px;

  margin: 3%;
  padding: 1% 2%;
  float: left;
  width: 40%;
  height: 60%;
`;
const Textarea = styled.textarea`
  height: 60px;
  width: 95%;
`;

const Divright = styled.div`
  border: 1px solid;
  border-radius: 30px;

  margin: 3% 1%;
  padding: 0% 2%;

  display: inline-block;

  width: 40%;
  height: 60%;
`;
const Preimg = styled.div`
  border: 1px solid;
  margin: 10px 0px;
  height: 200px;
  width: 170px;
`;

const Divfoot = styled.div`
  /* border: 1px dashed blue; */
  margin: 1% 3%;
  text-align: center;
  width: 92%;
`;

export default Put;
