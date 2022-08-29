import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { __getTodos } from "./redux/modules/todosSlice";
import { __getReviews } from "../Redux/modules/reviewSlice";
import { reviewsSlice } from "../Redux/modules/reviewSlice";


const List2 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getReviews());
  }, [dispatch]);

  console.log({reviewsSlice})

  return <div>List2</div>;
};

export default List2;