import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Logo from "../assets/logo.svg";
// import ModalReview from './Modals/ModalReview';
<<<<<<< HEAD
import ModalInput from "./Post";
import styled from "styled-components";
import axios from "axios";
=======
import ModalInput from './Post';
import styled from 'styled-components';
import axios from 'axios';
>>>>>>> 3fb3924ae83e55361ff334c8603db575db8a66c0

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [review, setReview] = useState({
<<<<<<< HEAD
    movie_title: "",
=======
    movie_title: '',
>>>>>>> 3fb3924ae83e55361ff334c8603db575db8a66c0
  });
  const [reviews, setReviews] = useState(null);

  // const fetchReviews = async () => {
  //   const { data } = await axios.get("http://localhost:3001/reviews");
  //   setReviews(data);
  // };

  const navigate = useNavigate();

<<<<<<< HEAD
  const onSubmitHandler = (review) => {
    axios.post("http://localhost:3001/reviews", review);
=======
  const onSubmitHandler = review => {
    axios.post('http://localhost:3001/reviews', review);
>>>>>>> 3fb3924ae83e55361ff334c8603db575db8a66c0
  };

  // useEffect(() => {
  //   fetchReviews();
  // }, []);

  return (
    <>
<<<<<<< HEAD
      <div className="home_wrap">
        <img className="logo" src={Logo} alt="로고" />

        <div className="list_button">
          <button
            className="now_movie_list"
            onClick={() => {
              navigate("/list2");
            }}
          >
=======
      <div className='home_wrap'>
        <img className='logo' src={Logo} alt='로고' />
        <div className='list_button'>
          <button
            className='now_movie_list'
            onClick={() => {
              navigate('/list2');
            }}>
>>>>>>> 3fb3924ae83e55361ff334c8603db575db8a66c0
            지금까지의 영화들
          </button>

          <button
<<<<<<< HEAD
            className="review_list"
            onClick={() => {
              navigate("/post2");
            }}
          >
=======
            className='review_list'
            onClick={() => {
              navigate('/post2');
            }}>
>>>>>>> 3fb3924ae83e55361ff334c8603db575db8a66c0
            리뷰쓰러 가기
          </button>
        </div>
      </div>
    </>
  );
};

const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #fa9f98;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #fac2be;
  }
`;

const AppWrap = styled.div`
  text-align: center;
  margin: 50px auto;
`;

export default Home;
