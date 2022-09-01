<<<<<<< HEAD:alikemovie/src/components/Post2.jsx
<<<<<<< HEAD
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Post2() {
  return (
    <>
      <div>ㅋㅋㅋㅋ</div>
    </>
  );
}

=======

import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios"; 
import { __postReviews } from "../Redux/modules/reviewSlice";
import { useDispatch, useSelector } from "react-redux";
import { reviewsSlice } from "../Redux/modules/reviewSlice";
import { __getReviews } from "../Redux/modules/reviewSlice";


=======
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
>>>>>>> 19d3394ce136104f56033bbf09422ad8acc8913e:alikemovie/src/components/Comments.jsx

function Comments() {
  const [review, setReview] = useState({
    movie_title: '',
  });
  const [reviews, setReviews] = useState(null);

  const fetchReviews = async () => {
    const { data } = await axios.get('http://localhost:3001/reviews');
    setReviews(data);
  };

  const onSubmitHandler = review => {
    axios.post('http://localhost:3001/reviews', review);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <Body>
      <Divleft
        onSubmit={e => {
          // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
          // e.preventDefault();
          onSubmitHandler(review);
        }}>
        <p>
          <h1>title</h1>
          <input
            type='text'
            onChange={ev => {
              const { value } = ev.target;
              setReview({
                ...review,
                movie_title: value,
              });
            }}
          />
        </p>
        <p>
          <h1> star </h1>
          <input
            type='text'
            onChange={ev => {
              const { value } = ev.target;
              setReview({
                ...review,
                star: value,
              });
            }}
          />
        </p>
        <p>
          <h1>contents</h1>
          <Textarea
            type='text'
            onChange={ev => {
              const { value } = ev.target;
              setReview({
                ...review,
                content: value,
              });
            }}
          />
        </p>
        <p>
          <button>추가하기</button>
        </p>
      </Divleft>
      <Divright>
        <p>
          <h1> image </h1>
          <input type='file' accept='image/*'></input>
          <Preimg></Preimg>
        </p>
      </Divright>
      <Divfoot>
        <h1>post2</h1>
        <div>
          {reviews?.map(review => (
            <div key={review.id}>{review.movie_title}</div>
          ))}
        </div>
      </Divfoot>
    </Body>
  );
}

<<<<<<< HEAD:alikemovie/src/components/Post2.jsx
const Body = styled.div`
  border: 1px solid blue;
  display: inline-block;

  width: 100%;
  min-width: 450px;
  max-height: 600px;
`;

const Divleft = styled.form`
  border: 1px solid red;
  margin: 3%;
  padding: 0% 2%;
  float: left;
  width: 40%;
  height: 60%;
`;
const Textarea = styled.textarea`
  height: 60px;
  width: 150px;
`;

const Divright = styled.div`
  border: 1px solid green;
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
  border: 1px solid;
  margin: 1% 3%;
  text-align: center;
  width: 92%;
`;

>>>>>>> 517e5c972437189ce8d5df653a099996af467b90
export default Post2;
=======
export default Comments;
>>>>>>> 19d3394ce136104f56033bbf09422ad8acc8913e:alikemovie/src/components/Comments.jsx
