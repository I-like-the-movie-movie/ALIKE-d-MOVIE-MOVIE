import React, { useEffect } from "react";
import { __getReviews } from "../Redux/modules/reviewSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import Lists from "./Lists";

const List2 = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const reviews = useSelector((state) => state.reviews.reviews);

  console.log("reviews=", reviews);

  useEffect(() => {
    dispatch(__getReviews());
  }, [dispatch]);

  return (
    <Divbox>
      <header>
        <Logobox>
          <img className="logo" src={Logo} alt="로고" />
        </Logobox>
        <button
          className="now_movie_list"
          onClick={() => {
            navigate("/");
          }}
        >
          home
        </button>
      </header>
      <div>
        {reviews.map((review) => (
          <Lists key={review.id} {...review} />
        ))}
      </div>
    </Divbox>
  );
};

const Divbox = styled.div`
  margin: 0px;
`;
const Logobox = styled.div`
  width: 350px;
  margin: 0px auto 0 auto;
`;

export default List2;
