import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
=======
>>>>>>> 19d3394ce136104f56033bbf09422ad8acc8913e

const initialState = {
  reviews: [],
  isLoading: false,
  error: null,
};

export const __postReviews = createAsyncThunk('reviews/postReviews', async (payload, thunkAPI) => {
  try {
    const data = await axios.post('http://localhost:3001/reviews', payload);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deleteReviews = createAsyncThunk('reviews/deleteReviews', async (payload, thunkAPI) => {
  try {
    const data = await axios.delete(`http://localhost:3001/reviews/${payload}`);
    console.log('deletetest');
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __getReviews = createAsyncThunk('reviews/getReviews', async (payload, thunkAPI) => {
  try {
    const data = await axios.get('http://localhost:3001/reviews');
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
<<<<<<< HEAD
);

<<<<<<< HEAD
export const __getReviews = createAsyncThunk('reviews/getReviews', async (payload, thunkAPI) => {
  try {
    const data = await axios.get('http://localhost:3001/reviews');
    return data.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: {
    [__getReviews.pending]: state => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getReviews.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.reviews = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getReviews.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
=======
export const __getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/reviews");
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
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

=======
});

export const __patchReviews = createAsyncThunk('reviews/patchReviews', async (payload, thunkAPI) => {
  try {
    const data = await axios.patch(`http://localhost:3001/reviews/${payload.id}`, payload);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
}); //put del id를 특정
>>>>>>> 19d3394ce136104f56033bbf09422ad8acc8913e

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: {
<<<<<<< HEAD
      [__getReviews.pending]: (state) => {
        state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
      },
      [__getReviews.fulfilled]: (state, action) => {
        state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
        state.reviews = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      },
      [__getReviews.rejected]: (state, action) => {
        state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
        state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      },
      [__postReviews.pending]: (state) => {
        state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
      },
      [__postReviews.fulfilled]: (state, action) => {
        state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
        state.reviews = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      },
      [__postReviews.rejected]: (state, action) => {
        state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
        state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      },

>>>>>>> 517e5c972437189ce8d5df653a099996af467b90
=======
    [__getReviews.pending]: state => {
      state.isLoading = true;
    },
    [__getReviews.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload;
    },
    [__getReviews.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__postReviews.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.reviews.push(action.payload);
    },
>>>>>>> 19d3394ce136104f56033bbf09422ad8acc8913e
  },
});

// // 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// export const { addNumber, minusNumber } = reviewSlice.actions;
// // reducer 는 configStore에 등록하기 위해 export default 합니다.
// export default reviewSlice.reducer;

export const {} = reviewsSlice.actions;
export default reviewsSlice.reducer;
