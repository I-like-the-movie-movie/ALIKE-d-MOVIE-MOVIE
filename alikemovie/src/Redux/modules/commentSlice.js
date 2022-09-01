import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const url2 = `http://localhost:3001/comments`


const initialState = {
  comments: [],
  isLoading: false,
  error: null,

};
export const __postComments = createAsyncThunk(
  "comments/postComments",
  async (payload, thunkAPI) => {
    try {
      // const data = await axios.post("http://localhost:3001/comments");
    
      const data = await axios.post(url2,
        payload
        // reviewsId:payload.reviewsId,
        // comment: payload.comment,
      )
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
      console.log(payload,1)
      // const data = await axios.get("http://localhost:3001/comments");
      // const data = await axios.get(`${url2}+?reviewId=${payload}`);
      // const data = await axios.get(url2);
      const data = await axios.get(url2);

      // /comments 앞에부분 변수 할당해서 코드 줄이는 방법도 있음
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
      // console.log(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }

  }
);

export const __deleteComments = createAsyncThunk(
  "comments/deleteComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(`${url2}/${payload}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
      // console.log(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }

  }
);

// export const updateUser2 = createAsyncThunk(
//   "users/update", 
//   async (user) => {
//   const response = await axios.post(
//     "http://localhost:8800/api/users/1/update",
//     user
//   );
//   return response.data;
// });
// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async (authData) => {
//     const response = axios.post("auth/token/login/", {
//       email: authData.email,
//       password: authData.password,
//     });
//     return response.data;
//   },
//   {
//     condition: (authData, { getState, extra }) => {
//       const { auth } = getState();
//       if (["fulfilled", "loading"].includes(auth.status)) {
//         return false;
//       }
//     },
//   }
// );


export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
      [__getComments.pending]: (state) => {
        state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
      },
      [__getComments.fulfilled]: (state, action) => {
        state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
        state.comments = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      },
      [__getComments.rejected]: (state, action) => {
        state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
        state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      },
      [__postComments.pending]: (state) => {
        state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
      },
      [__postComments.fulfilled]: (state, action) => {
        state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
        state.comments = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      },
      [__postComments.rejected]: (state, action) => {
        state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
        state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      },

  },
});

// // 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// export const { addNumber, minusNumber } = reviewSlice.actions;
// // reducer 는 configStore에 등록하기 위해 export default 합니다.
// export default reviewSlice.reducer;

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;