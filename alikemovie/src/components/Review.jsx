// import Logo from "../assets/logo.svg";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __deleteReviews,
  __getReviews,
  __putReviews,
} from "../Redux/modules/reviewSlice";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { __getComments, __postComments } from "../Redux/modules/commentSlice";

const Review = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [detailreviews, setDetailReviews] = useState(null);
  const location = useLocation();
  const param = useParams();
  const [comment, setComment] = useState("댓글달아보시지");
  const { id } = useParams();

  
  const paramsComment = parseInt(id);
  const onClickDeleteButtonHandler = (movieID) => {
    console.log(movieID);
    dispatch(__deleteReviews(movieID));
    alert("삭제가 완료 되었습니다!");
    navigate("/list");
  };

  const onClickPutButtonHandler = (movieID) => {
    console.log(movieID);
    // dispatch(__putReviews((movieID)))
    alert("내용을 수정해주세요!");
    navigate(`/put/${movieID}`);
    // console.log(    dispatch(__deleteReviews()))
    // console.log(typeof(params.id))
  };

  // const fetchComments = async () => {
  //   // const { comment } = await axios.get("http://localhost:3001/comments",{Id:param?.id});
  //   const { comment } = await axios.get("http://localhost:3001/comments", {
  //     Id: param.id,
  //   });
  //   setComment(...comment, comment);
  //   // console.log("bbbb");
  //   // console.log(comment);
  //   //undefined
  //   // console.log(param);
  // };
  const addComment = (e) => {
    e.preventDefault();
    if (comment === "") {
      alert("댓글을 작성 해주세요.");
    }
    dispatch(
      __postComments({
        // reviewsId:params,
        reviewsId: params.id,
        comment: comment,
      })
    );
    setComment("");
  };
  const commentHandle = (e) => {
    setComment(e.target.value);
  };
  useEffect(() => {
    // dispatch(getBoardAsync(params));
    // fetchComments();
    dispatch(__getReviews());
    dispatch(__getComments());
  }, [dispatch]);

  let params = useParams();
  // console.log(comment)
  // console.log(paramsComment)

  const reviews = useSelector((state) => state.reviews.reviews);
  const comments = useSelector((state) => state.comments);
  console.log(comments)
  return (
    <div>
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
      <Reviews>
        {reviews
          .filter((el) => el.id === params.id)
          .map(
            (reviews) => (
              console.log("movie_title", reviews.movie_title),
              (
                <div key={reviews.id}>
                  <h1>post</h1>
                  <img src={reviews.picture} alt="poster" />
                  <h1>title</h1>
                  <p>{reviews.movie_title}</p>
                  <h1>star</h1>
                  <p>{reviews.star}</p>
                  <h1>content</h1>
                  <p>{reviews.content}</p>

                  <div>
                    <button
                      type="button"
                      onClick={() => onClickDeleteButtonHandler(params.id)}
                    >
                      del
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => onClickPutButtonHandler(params.id)}
                    >
                      put
                    </button>
                  </div>
                  <CommentContainer>
                    <Comment id={paramsComment}></Comment>
                    <CommentInput
                      value={comment}
                      type="text"
                      onChange={commentHandle}
                    />
                    <CommentBtn onClick={addComment} type="submit">
                      댓글 추가
                    </CommentBtn>
                  </CommentContainer>
                </div>
              )
            )
          )}
      </Reviews>
    </div>
  );
};

const Logobox = styled.div`
  width: 350px;
  margin: 0px auto 0 auto;
`;
const Reviews = styled.div`
  border: 1px solid;
  margin: 3%;
  padding: 10px;
`;
const Comment = styled.div``;

const CommentContainer = styled.form`
  width: 800px;
  height: auto;
  margin: 20px auto;
`;

const CommentBox = styled.div`
  width: 800px;
  height: 35px;
  margin: 20px auto;
  display: flex;
  border: 1px solid black;
`;

const CommentInput = styled.input`
  width: 800px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  border: 1px solid black;
`;

const CommentBtn = styled.button`
  width: 80px;
  height: 30px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
`;
export default Review;
