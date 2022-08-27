
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Logo from '../assets/logo.svg';
// import ModalReview from './Modals/ModalReview';
import ModalInput from './Post';
import List from './List';
import styled from 'styled-components';
import axios from "axios"; 

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const onClickButton = () => {
    setIsOpen(true);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className='home_wrap'>
        <img className='logo' src={Logo} alt='로고' />

        <div className='list_button'>
          <button className='now_movie_list' onClick={() => {
            navigate('/list')
          }}>
            지금까지의 영화들--
          </button>

          {/* <button type="button" onClick="refreshPage()">Close</button>

function refreshPage(){ window.location.reload() */}
          <form
        onSubmit={(e) => {
          // 버튼 눌렀을때 새로고침
          // window.location.reload()
          // 👇 submit했을 때 브라우저의 새로고침을 방지합니다. 
          // e.preventDefault();
          onSubmitHandler(review);
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
      </form>

      <div>
        {reviews?.map((review) => (
          <div key={review.id}>{review.movie_title}</div>
        ))}
      </div>


          {/* <button className='review_list' onClick={onClickButton}>
            리뷰쓰러 가기
          </button> */}
          {isOpen && (
            <ModalInput
              open={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
            />
          )}
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
