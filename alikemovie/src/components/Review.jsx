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
import { __getComments, __postComments, __deleteComments } from "../Redux/modules/commentSlice";

const Review = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [detailreviews, setDetailReviews] = useState(null);
  const location = useLocation();
  const param = useParams();
  const [comment, setComment] = useState("");
  const { id } = useParams();


  console.log(typeof(id))
  const paramsComment = parseInt(id);
  console.log(paramsComment)
  const onClickDeleteButtonHandler = (movieID) => {
    console.log(movieID);
    dispatch(__deleteReviews(movieID));
    // alert("삭제가 완료 되었습니다!");
    navigate("/list");
  };

  const onClickPutButtonHandler = (movieID) => {
    console.log(movieID);
    // dispatch(__putReviews((movieID)))
    alert("내용을 수정해주세요!");
    navigate(`/put/${movieID}`);
  };

  // const onClickDeleteCommentHandler = (commentID) => {
  //   console.log(commentID);
  //   // 1부터 14까지
  //   dispatch(__deleteComments((commentID)))
  //   // alert("삭제가 완료되었습니다!");
  //   // navigate(`/put/${commentID}`);
  // }; 
  

  const addComment = (e) => {
    e.preventDefault();
    if (comment === "") {
      alert("댓글을 작성 해주세요.");
    }
    dispatch(
      __postComments({
        reviewsId: params.id,
        comment: comment,
      })
      
    );
    setComment("");
    // window.location.reload();
    // navigate(`/`);
    // navigate(`/review/${Number(params.id)}`);
    // console.log(params.id)
    // console.log(typeof(params.id))

  };
  const commentHandle = (e) => {
    setComment(e.target.value);
  };
  useEffect(() => {
    dispatch(__getReviews());
    dispatch(__getComments());
    // dispatch(__deleteComments());
  }, [dispatch]);

  let params = useParams();
  const reviews = useSelector((state) => state.reviews.reviews);
  const comments = useSelector((state) => state.comments);
  console.log(comments)
  console.log(comments.coments)

  const filteredComments = comments.filter((el)=> el.reviewsId === id );

  // console.log(filteredComments)
  
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
      <Comments>
      {filteredComments
          .map(
            (comment) => (
              <div key={comment.id}>
              <p>{comment.comment}</p>
              {/* <button onClick={onClickDeleteCommentHandler(comment.id)}>
                댓글del
              </button> */}
              <button >
                댓글put
              </button>

              </div>
            ))
        }        
      </Comments>
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
const Comments = styled.div`
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
