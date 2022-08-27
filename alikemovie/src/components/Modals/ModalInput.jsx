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



      </form>

      <div>
        {reviews?.map((review) => (
          <div key={review.id}>{review.movie_title}</div>
        ))}
      </div>




      {/* </div> */}
    </form>
  );
}

export default ModalInput;
