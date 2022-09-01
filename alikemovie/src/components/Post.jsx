<<<<<<< HEAD
// import "./ModalInput.css";
// import Modal from "react-modal";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import './Home.css';
// import Logo from '../assets/logo.svg';
// import ModalReview from './Modals/ModalReview';
// import List from './List';
import styled from "styled-components";
import axios from "axios";
<<<<<<< HEAD
=======
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
>>>>>>> 3fb3924ae83e55361ff334c8603db575db8a66c0
=======
>>>>>>> 517e5c972437189ce8d5df653a099996af467b90

function Post() {
  const [review, setReview] = useState({
    movie_title: '',
  });
  const [reviews, setReviews] = useState(null);

  const fetchReviews = async () => {
    const { data } = await axios.get('http://localhost:3001/reviews');
    setReviews(data);
    console.log("bbbb");
  };

<<<<<<< HEAD
  const onSubmitHandler = (review) => {
    axios.post("http://localhost:3001/reviews", review);
    console.log("aaaaa");
<<<<<<< HEAD
=======
  const onSubmitHandler = review => {
    axios.post('http://localhost:3001/reviews', review);
    console.log('aaaaa');
>>>>>>> 3fb3924ae83e55361ff334c8603db575db8a66c0
=======
>>>>>>> 517e5c972437189ce8d5df653a099996af467b90
  };
=======
import React, { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useDispatch } from "react-redux";
import { __postReviews } from "../Redux/modules/reviewSlice";
import { nanoid } from "@reduxjs/toolkit";

function Post() {
  const dispatch = useDispatch();

  const titleInput = useRef(null);
  const contentInput = useRef(null);
  const pictureInput = useRef(null);
  const starInput = useRef(null);
>>>>>>> 19d3394ce136104f56033bbf09422ad8acc8913e

  const onClickHandler = (e) => {
    e.preventDefault();
    const addPost = {
      id: nanoid(),
      star: starInput.current.value,
      movie_title: titleInput.current.value,
      picture: pictureInput.current.value,
      content: contentInput.current.value,
    };
    dispatch(__postReviews(addPost));
  };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 517e5c972437189ce8d5df653a099996af467b90
  // const navigate = useNavigate();

  return (
    <form className="Form">
      <div>
<<<<<<< HEAD
        <form
          onSubmit={(e) => {
            console.log("ccc");
=======
  const navigate = useNavigate();

  return (
    <form className='Form'>
      <div>
        <form
          onSubmit={e => {
            console.log('ccc');

>>>>>>> 3fb3924ae83e55361ff334c8603db575db8a66c0
=======
        <form
          onSubmit={(e) => {
            console.log("ccc");
>>>>>>> 517e5c972437189ce8d5df653a099996af467b90
            // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
            e.preventDefault();
            console.log(review);
            onSubmitHandler(review);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 517e5c972437189ce8d5df653a099996af467b90
          }}
        >
          <input
            type="text"
            onChange={(ev) => {
<<<<<<< HEAD
=======
          }}>
          <input
            type='text'
            onChange={ev => {
>>>>>>> 3fb3924ae83e55361ff334c8603db575db8a66c0
=======
>>>>>>> 517e5c972437189ce8d5df653a099996af467b90
              const { value } = ev.target;
              setReview({
                ...review,
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
<<<<<<< HEAD
<<<<<<< HEAD
          {reviews?.map((review) => (
=======
          {reviews?.map(review => (
>>>>>>> 3fb3924ae83e55361ff334c8603db575db8a66c0
=======
          {reviews?.map((review) => (
>>>>>>> 517e5c972437189ce8d5df653a099996af467b90
            <div key={review.id}>{review.movie_title}</div>
          ))}
        </div>
      </div>
    </form>
=======
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
        <input ref={titleInput} type="text" />

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

        <button>추가하기</button>
      </Divleft>
      <Divright>
        <h1> image </h1>
        <input ref={pictureInput} type="file" accept="image/*"></input>
        <Preimg></Preimg>
      </Divright>
      <Divfoot></Divfoot>
    </Body>
>>>>>>> 19d3394ce136104f56033bbf09422ad8acc8913e
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

export default Post;
