import { combineReducers, configureStore } from "@reduxjs/toolkit";
import _reviews from "../modules/reviewSlice";
import _comments from "../modules/commentSlice";

const rootReducer = combineReducers({
  reviews: _reviews,
  comments: _comments,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

//reducer를 여러개 만들었을 경우 root로 묶음
