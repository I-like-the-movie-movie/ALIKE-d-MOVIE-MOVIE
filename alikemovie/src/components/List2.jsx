import React, { useEffect, useState } from 'react';
import { __getReviews } from '../Redux/modules/reviewSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './List2.css';
import imgfile from '../assets/image.jpg';
import axios from 'axios';

const List2 = () => {
  const [reviewsCon, setReviewsCon] = useState({ movie_title: '', picture: null, contents: '' });

  const fetchReviews = async () => {
    const { reviews } = await axios.get('http://locahost:3001/reviews');
    setReviewsCon(reviews);
  };

  return (
    <main className='wrap'>
      <header className='list_title'>영화입니다</header>

      <article className='movie_list'>
        <div className='movie_info'>
          <div className='movie_poster'>
            <img src={imgfile} alt='이미지포스터' />
          </div>
          <h3>바보멍청이똥개</h3>
          <p>존잼</p>
        </div>
      </article>
    </main>
  );
};
export default List2;
