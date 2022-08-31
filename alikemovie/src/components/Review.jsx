import styled from "styled-components";
import axios from "axios";
import Logo from "../assets/logo.svg";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { __getReviews } from "../Redux/modules/reviewSlice";

function Review({ star, movie_title, picture, content }) {
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {}, []);

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>title</h1>
        {movie_title}
        <h1>star</h1>
        {star === "1" ? <Star defaultValue="★" /> : star}

        <h1>content</h1>
        {content}
      </div>
    </div>
  );
}

export default Review;

// <Body>
//   <Wrap>
//     <img className="logo" src={Logo} alt="로고" />
//   </Wrap>
//   <header>
//     <button
//       className="now_movie_list"
//       onClick={() => {
//         navigate("/list2");
//       }}
//     >
//       list
//     </button>
//   </header>
//   {detailreviews?.map((detailReview) => (
//     <div> {detailReview.movie_title.id} </div> //이거뭐져
//   ))}
//   <div>
//     {detailreviews
//       ?.filter((el) => el.id === Number(param.id))
//       ?.map((detailReview) => (
//         <div key={detailReview.id}>
//           <h1>Poster</h1>
//           {detailReview.picture}
//           <h1>title</h1>
//           {detailReview.movie_title}
//           <h1>star</h1>
//           {detailReview.star}
//           <h1>content</h1>
//           {detailReview.content}

//           {/* {detailReview.comments} */}
//         </div>
//       ))}
//   </div>
// </Body>

// const Body = styled.div`
//   margin: 5%;
// `;
// const Wrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: auto;
// `;

// const Logobox = styled.div`
//   width: 350px;
//   margin: 100px auto 0 auto;
// `;
