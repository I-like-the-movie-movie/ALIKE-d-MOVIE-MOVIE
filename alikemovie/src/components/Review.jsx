
import styled from 'styled-components';
import axios from "axios"; 
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';




function Review() {


const [detailreviews, setDetailReviews] = useState(null);
const location = useLocation();
const param = useParams();
		// 훅을 사용해서 생성한 param을 콘솔에 찍어봅시다.
  // console.log(param);
  // console.log(detailreviews[param.id])
  console.log(param.id)
  console.log(typeof param.id)
  console.log(Number(param.id))
  console.log(detailreviews)
  // axios.get('https://localhost:4000/sendlist/todo', {userId: userId},

  const fetchDetailReviews = async () => {
    const { data } = await axios.get("http://localhost:3001/reviews",{Id:param?.id});
    setDetailReviews(data);
    console.log('bbbb');
    console.log(data);
    console.log(param.id);

  };
  useEffect(() => {
    fetchDetailReviews();
  }, []);

// List.jsx에서 state자료를 받아와서 (  const [reviews, setReviews] = useState(null);)
// Reviews.jsx 
  return (
    <div>
      <div>
      pathname : {location.pathname}
      </div>
      {/* <div>
        detailReviews[{location.pathname}]
      </div> */}
      {/* <div>
        {detailreviews[Number(param.id)]}
      </div> */}
      {detailreviews?.map((detailReview) =>(

      
      <div> {detailReview.movie_title} </div>
      ) )}
      <div>
        {detailreviews?.filter(el=> el.id === Number(param.id))?.map((detailReview) =>(
          <div> 
            {detailReview.movie_title} 
            {detailReview.star}
            {detailReview.content} 
            {detailReview.picture} 
          </div>
          
          ))}
      </div>

      {/* <div> `${{review.id}}` </div> */}

    </div>
  );

}


export default Review;