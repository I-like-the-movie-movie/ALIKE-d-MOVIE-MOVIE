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

  useEffect(() => {
    fetchReviews();
  }, []);

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
  );
}

export default Post;
