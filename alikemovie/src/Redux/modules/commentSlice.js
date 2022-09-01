import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url2 = `http://localhost:3001/comments`;

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};
export const __postComments = createAsyncThunk(
  "comments/postComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        url2, // reviewsId:payload.reviewsId,
        payload // comment: payload.comment,
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getComments = createAsyncThunk(
  "comments/getComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(url2);
      // const data = await axios.get(url2+"/"+payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
      // Store에 있는 todos에 서버에서 가져온 todos넣음
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__postComments.pending]: (state) => {
      state.isLoading = true;
      // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__postComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__postComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // catch 된 error 객체를 state.error에 넣음
    },
  },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;

// 액션크리에이터는 component에서 사용하기 위해 export
// export const { addNumber, minusNumber } = reviewSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default
// export default reviewSlice.reducer;
