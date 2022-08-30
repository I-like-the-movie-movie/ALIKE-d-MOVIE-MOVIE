import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __postReviews } from '../Redux/modules/reviewSlice';
import { __getReviews } from '../Redux/modules/reviewSlice';

function Post2() {
  const [inputValue, setInputValue] = useState({ movie_title: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getReviews(), __postReviews());
  }, []);

  const { isLoading, error, reviews } = useSelector(state => state.reviews);
  if (isLoading) {
    return <div>로딩 중....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  const onChange = e => {
    const { movieTitle } = e.target;
    console.log('🚀 ~ onChange ~ movieTitle', movieTitle);

    // setInputValue({ movieTitle });
  };

  const onSubmitHandler = e => {
    // const response = axios.post('http://localhost:3001/reviews', setInputValue);
    // dispatch({type:'reviews', movie_title:'movieTitle'})
    console.log('ggg');
    // return __postReviews();
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler()}>
        <input type='text' onChange={onChange} />
        <button>제목추가하기</button>
      </form>
      <div>
        {reviews?.map(review => (
          <div key={review.id}>{review.movie_title}</div>
        ))}
      </div>
    </div>
  );
}

export default Post2;
