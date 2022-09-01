import styled from 'styled-components';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { __getComments, __postComments } from '../Redux/modules/commentSlice';
import {useDispatch, useSelector} from "react-redux"

function Review() {

// const [coments, setComments] = useState(null);

const [detailreviews, setDetailReviews] = useState(null);
const location = useLocation();
const param = useParams();
const [comment,setComment] = useState("")
const {id} = useParams()
const params = parseInt(id)
const dispatch = useDispatch();
// const { isLoading, error, comments } = useSelector((state) => state.comments);


		// 훅을 사용해서 생성한 param을 콘솔에 찍어봅시다.
  // console.log(param.id)
  // console.log(typeof param.id)
  // console.log(Number(param.id))
  // console.log(detailreviews)
>>>>>>> 517e5c972437189ce8d5df653a099996af467b90
  // axios.get('https://localhost:4000/sendlist/todo', {userId: userId},

  const fetchDetailReviews = async () => {
    const { data } = await axios.get('http://localhost:3001/reviews', { Id: param?.id });
    setDetailReviews(data);
    // const { comment } = await axios.get("http://localhost:3001/comments",{Id:param?.id});
    // setComment(comment)
    // console.log('bbbb');
    // console.log(data);
    // console.log(param.id);
  };
  const fetchComments = async () => {
    // const { comment } = await axios.get("http://localhost:3001/comments",{Id:param?.id});
    const { comment } = await axios.get("http://localhost:3001/comments",{Id:param?.id});
    setComment(comment)
    console.log('bbbb');
<<<<<<< HEAD
    console.log(data);
    console.log(param.id);
=======
    console.log(comment);
    //undefined
    console.log(param);

>>>>>>> 517e5c972437189ce8d5df653a099996af467b90
  };


  const addComment = (e) => {
    e.preventDefault();
    if (comment === ""){
        alert("댓글을 작성 해주세요.")
    }
    dispatch(
        __postComments({
            // reviewsId:params,
            reviewsId:params,
            comment:comment
        })
    )
    setComment("")
}
const commentHandle = (e) => {
  setComment(e.target.value)
}
  useEffect(() => {
    // dispatch(getBoardAsync(params));
    fetchComments();
    dispatch(__getComments(params));
  }, []);
//   useEffect(()=>{
//     dispatch(getBoardAsync(params));
//     dispatch(getCommentIdAsync(params));
// },[check])

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
<<<<<<< HEAD
      {detailreviews?.map(detailReview => (
        <div> {detailReview.movie_title} </div>
      ))}
      <div>
        {detailreviews
          ?.filter(el => el.id === Number(param.id))
          ?.map(detailReview => (
            <div>
              {detailReview.movie_title}
              {detailReview.star}
              {detailReview.content}
              {detailReview.picture}
            </div>
=======
      {/* {detailreviews?.map((detailReview) =>(

      
      <div> {detailReview.movie_title} </div>
      ) )} */}
      <div>
        {detailreviews?.filter(el=> el.id === Number(param.id))?.map((detailReview) =>(
          <div> 
            {detailReview.movie_title} 
            {detailReview.star}
            {detailReview.content} 
            {detailReview.picture} 
          </div>
          
          
>>>>>>> 517e5c972437189ce8d5df653a099996af467b90
          ))}
            <CommentContainer>
              <Comment id={params}></Comment>
              <CommentInput value = {comment} type= "text" onChange={commentHandle}/>
              <CommentBtn onClick={addComment} type="submit">댓글 추가</CommentBtn>
            </CommentContainer>
          <div>
            댓글은 여기에
          </div>
          {/* <div>
          {comments?.map((comment) => (
            <div key={comment.id}>{comment.comment}</div>
          ))}

          </div> */}
      </div>

      {/* <div> `${{review.id}}` </div> */}
    </div>
  );
}

<<<<<<< HEAD
export default Review;
=======

export default Review;

const Comment = styled.form`
  
`

const CommentContainer = styled.form`
    width: 800px;
    height: auto;
    margin: 20px auto;
`

const CommentBox = styled.div`
    width: 800px;
    height: 35px;
    margin: 20px auto;
    display: flex;
    border: 1px solid black;
`


const CommentInput = styled.input`
    width: 800px;
    height: 30px;
    margin: 0 auto;
    display: flex;
    border: 1px solid black;
`

const CommentBtn =styled.button`
    width: 80px;
    height: 30px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
`
>>>>>>> 517e5c972437189ce8d5df653a099996af467b90
