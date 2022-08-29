<<<<<<< HEAD
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

=======
import React from 'react';
import './App.css';
import Modal from 'react-modal';
>>>>>>> b1fd330b95d97951aab3417a30aa3d42d05290fa

function ModalInput() {

  const [review, setReview] = useState({
    movie_title: "",
  });
  const [reviews, setReviews] = useState(null);

  const fetchReviews = async () => {
    const { data } = await axios.get("http://localhost:3001/reviews");
    setReviews(data);
  };

  const onSubmitHandler = (review) => {
    axios.post("http://localhost:3001/reviews", review);
  };

  useEffect(() => {
    fetchReviews();
  }, []);


  const navigate = useNavigate();



  return (
<<<<<<< HEAD
    <form className="Form">


        <form
        onSubmit={(e) => {
					// 👇 submit했을 때 브라우저의 새로고침을 방지합니다. 
          e.preventDefault();
          onSubmitHandler(review);
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

        <div>
        {reviews?.map((review) => (
          <div key={review.id}>{review.movie_title}</div>
        ))}
=======
    <form className='Form'>
      <div className='Divleft'>
        <h2> 제목 </h2>
        <input className='Input' type='text' />
        <h2> 별점 </h2>
        <div class='star-rating'>
          <input type='radio' id='5-stars' name='rating' value='5' v-model='ratings' />
          <label for='5-stars' class='star pr-4'>
            ★
          </label>
          <input type='radio' id='4-stars' name='rating' value='4' v-model='ratings' />
          <label for='4-stars' class='star'>
            ★
          </label>
          <input type='radio' id='3-stars' name='rating' value='3' v-model='ratings' />
          <label for='3-stars' class='star'>
            ★
          </label>
          <input type='radio' id='2-stars' name='rating' value='2' v-model='ratings' />
          <label for='2-stars' class='star'>
            ★
          </label>
          <input type='radio' id='1-star' name='rating' value='1' v-model='ratings' />
          <label for='1-star' class='star'>
            ★
          </label>
        </div>
        <h2> 작성자 </h2>
        <input type='text' />
        <h2> 내용 </h2>
        <textarea className='Textarea' />
      </div>
      <div className='Divright'>
        <h2> 포스터 </h2>
        <input type='file' accept='image/*'></input>
        <div className='Preimg'></div>
      </div>
      <div className='Divfooter'>
        <button> 작성하기 </button>
>>>>>>> b1fd330b95d97951aab3417a30aa3d42d05290fa
      </div>


      </form>





      {/* </div> */}
    </form>
  );
}

// const Overlay = styled.div`
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background: rgba(0, 0, 0, 0.2);
//   z-index: 9999;
// `;

// const ModalWrap = styled.div`
//   width: 600px;
//   height: fit-content;
//   border-radius: 15px;
//   background-color: #fff;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

// const CloseButton = styled.div`
//   float: right;
//   width: 40px;
//   height: 40px;
//   margin: 20px;
//   cursor: pointer;
//   i {
//     color: #5d5d5d;
//     font-size: 30px;
//   }
// `;

// const Contents = styled.div`
//   margin: 50px 30px;
//   h1 {
//     font-size: 30px;
//     font-weight: 600;
//     margin-bottom: 60px;
//   }
//   img {
//     margin-top: 60px;
//     width: 300px;
//   }
// `;
// const Button = styled.button`
//   font-size: 14px;
//   padding: 10px 20px;
//   border: none;
//   background-color: #ababab;
//   border-radius: 10px;
//   color: white;
//   font-style: italic;
//   font-weight: 200;
//   cursor: pointer;
//   &:hover {
//     background-color: #898989;
//   }
// `;

export default ModalInput;
