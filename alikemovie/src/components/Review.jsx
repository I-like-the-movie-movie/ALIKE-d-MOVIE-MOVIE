import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";

import reviewSlice from "../Redux/modules/reviewSlice";
>>>>>>> 5eb0d96ca3d02d7bcab5062b206a4a8140eaa3af

function Review() {
  const [detailreviews, setDetailReviews] = useState(null);
  const location = useLocation();
  const param = useParams();
  // 훅을 사용해서 생성한 param을 콘솔에 찍어봅시다.
  // console.log(param);
  // console.log(detailreviews[param.id])
  console.log(param.id);
  console.log(typeof param.id);
  console.log(Number(param.id));
  console.log(detailreviews);
  // axios.get('https://localhost:4000/sendlist/todo', {userId: userId},

  const fetchDetailReviews = async () => {
    const { data } = await axios.get("http://localhost:3001/reviews", {
      Id: param?.id,
    });
<<<<<<< HEAD

    setDetailReviews(data);
    console.log("bbbb");
    console.log(data);
    console.log(param.id);
  };

  const deleteReviews = () => {
    axios.delete("http://localhost:3001/reviews", {
      data: {
        Id: detailreviews?.id,
      },
    });
  };

  useEffect(() => {
    fetchDetailReviews();
    deleteReviews();
  }, []);

  // List.jsx에서 state자료를 받아와서 (  const [reviews, setReviews] = useState(null);)
  // Reviews.jsx
  return (
    <div>
      <div>pathname : {location.pathname}</div>
      {/* <div>
        detailReviews[{location.pathname}]
      </div> */}
      {/* <div>
        {detailreviews[Number(param.id)]}
      </div> */}
      {detailreviews?.map((detailReview) => (
        <div> {detailReview.movie_title} </div>
=======
    setDetailReviews(data);
  };
  useEffect(() => {
    fetchDetailReviews();
  }, []);

  const navigate = useNavigate();

  // List.jsx에서 state자료를 받아와서 (  const [reviews, setReviews] = useState(null);)
  // Reviews.jsx
  return (
    <Body>
      <Wrap>
        <img className="logo" src={Logo} alt="로고" />
      </Wrap>
      <header>
        <button
          className="now_movie_list"
          onClick={() => {
            navigate("/list2");
          }}
        >
          list
        </button>
      </header>
      {detailreviews?.map((detailReview) => (
        <div> {detailReview.movie_title.id} </div> //이거뭐져
>>>>>>> 5eb0d96ca3d02d7bcab5062b206a4a8140eaa3af
      ))}
      <div>
        {detailreviews
          ?.filter((el) => el.id === Number(param.id))
          ?.map((detailReview) => (
            <div>
<<<<<<< HEAD
              {detailReview.movie_title}
              {detailReview.star}
              {detailReview.content}
              {detailReview.picture}
              <button onClick={deleteReviews}>삭제</button>
            </div>
          ))}
      </div>

      {/* <div> `${{review.id}}` </div> */}
    </div>
  );
}

=======
              <h1>Poster</h1>
              {detailReview.picture}
              <h1>title</h1>
              {detailReview.movie_title}
              <h1>star</h1>
              {detailReview.star}
              <h1>content</h1>
              {detailReview.content}

              {/* {detailReview.comments} */}
            </div>
          ))}
      </div>
    </Body>
  );
}

const Body = styled.div`
  margin: 5%;
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
>>>>>>> 5eb0d96ca3d02d7bcab5062b206a4a8140eaa3af
export default Review;
