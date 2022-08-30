import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Logo from '../assets/logo.svg';
// import ModalReview from './Modals/ModalReview';
import ModalInput from './Post';
import styled from 'styled-components';
import axios from 'axios';

const Home = () => {
  const test = 'test';

  const navigate = useNavigate();

  return (
    <>
      <div className='home_wrap'>
        <img className='logo' src={Logo} alt='로고' />

        <div className='list_button'>
          <button
            className='now_movie_list'
            onClick={() => {
              navigate('/list');
            }}>
            지금까지의 영화들
          </button>

          <button
            className='review_list'
            onClick={() => {
              navigate('/post');
            }}>
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
