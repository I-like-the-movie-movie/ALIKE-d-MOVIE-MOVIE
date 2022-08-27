// import "./ModalInput.css";
// import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
// import './Home.css';
// import Logo from '../assets/logo.svg';
// import ModalReview from './Modals/ModalReview';
// import List from './List';
import styled from 'styled-components';
import axios from "axios"; 


function Post() {

  const [review, setReview] = useState({
    movie_title: "",
  });
  const [reviews, setReviews] = useState(null);

  const fetchReviews = async () => {
    const { data } = await axios.get("http://localhost:3001/reviews");
    setReviews(data);
    console.log('bbbb');
  };

  const onSubmitHandler = (review) => {
    axios.post("http://localhost:3001/reviews", review);
    console.log('aaaaa');
  };

  useEffect(() => {
    fetchReviews();
  }, []);


  const navigate = useNavigate();



  return (

    <div>

        <form
        onSubmit={(e) => {
          console.log('ccc');
					// 👇 submit했을 때 브라우저의 새로고침을 방지합니다. 
          // e.preventDefault();
          console.log(review);
          onSubmitHandler(review);
          console.log('dddd');
                    {/* <button type="button" onClick="refreshPage()">Close</button>

function refreshPage(){ window.location.reload() */}
  // 버튼 눌렀을때 새로고침
  // window.location.reload()
  // 👇 submit했을 때 브라우저의 새로고침을 방지합니다. 
  // e.preventDefault();
  //질문: window.location.reload() , e.preventDefault() 쓰나 안쓰나 새로고침이 되는 문제. 차이가 무엇인지.
  // 질문2: 엔터 온클릭의 차이 (렌러링 범위, 속도)

        }}
      >
        <input
          type="text"
          onChange={(ev) => {
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
        {reviews?.map((review) => (
          <div key={review.id}>{review.movie_title}</div>
        ))}
      </div>




      </div>

  );
}

export default Post;
