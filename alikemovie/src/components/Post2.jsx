import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Post2() {
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
    <Body>
      <header>
        <Wrap>
          <img className="logo" src={Logo} alt="로고" />
        </Wrap>{" "}
        <button
          className="now_movie_list"
          onClick={() => {
            navigate("/");
          }}
        >
          home
        </button>
      </header>
      <Divleft
        onSubmit={(e) => {
          // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
          // e.preventDefault();
          onSubmitHandler(review);
        }}
      >
        <p>
          <h1>title</h1>
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
        </p>
        <p>
          <h1> star </h1>
          <input
            type="text"
            onChange={(ev) => {
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
            type="text"
            onChange={(ev) => {
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
          <input type="file" accept="image/*"></input>
          <Preimg></Preimg>
        </p>
      </Divright>
      <Divfoot>
        <h1>post2</h1>
        <div>
          {reviews?.map((review) => (
            <div key={review.id}>{review.movie_title}</div>
          ))}
        </div>
      </Divfoot>
    </Body>
  );
}

const Body = styled.div`
  border: 1px solid;
  display: inline-block;

  width: 100%;
  min-width: 450px;
  height: 100%;
  max-height: 800px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Logobox = styled.div`
  width: 350px;
  margin: 100px auto 0 auto;
`;
const Divleft = styled.form`
  border: 1px solid red;
  border-radius: 30px;

  margin: 3%;
  padding: 0% 2%;
  float: left;
  width: 40%;
  height: 60%;
`;
const Textarea = styled.textarea`
  height: 60px;
  width: 95%;
`;

const Divright = styled.div`
  border: 1px solid green;
  border-radius: 30px;

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
  border: 1px dashed blue;
  margin: 1% 3%;
  text-align: center;
  width: 92%;
`;

export default Post2;
