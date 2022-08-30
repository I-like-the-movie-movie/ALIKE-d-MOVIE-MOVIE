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
=======
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
>>>>>>> 3fb3924ae83e55361ff334c8603db575db8a66c0

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
=======
  const onSubmitHandler = review => {
    axios.post('http://localhost:3001/reviews', review);
    console.log('aaaaa');
>>>>>>> 3fb3924ae83e55361ff334c8603db575db8a66c0
  };

  useEffect(() => {
    fetchReviews();
  }, []);

<<<<<<< HEAD
  // const navigate = useNavigate();

  return (
    <form className="Form">
      <div>
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
            // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
            e.preventDefault();
            console.log(review);
            onSubmitHandler(review);
<<<<<<< HEAD
          }}
        >
          <input
            type="text"
            onChange={(ev) => {
=======
          }}>
          <input
            type='text'
            onChange={ev => {
>>>>>>> 3fb3924ae83e55361ff334c8603db575db8a66c0
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
          {reviews?.map((review) => (
=======
          {reviews?.map(review => (
>>>>>>> 3fb3924ae83e55361ff334c8603db575db8a66c0
            <div key={review.id}>{review.movie_title}</div>
          ))}
        </div>
      </div>
    </form>
  );
}

export default Post;
