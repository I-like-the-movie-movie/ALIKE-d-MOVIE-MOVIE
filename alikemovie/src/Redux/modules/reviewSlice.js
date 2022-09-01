import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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
});

export const __patchReviews = createAsyncThunk('reviews/patchReviews', async (payload, thunkAPI) => {
  try {
    const data = await axios.patch(`http://localhost:3001/reviews/${payload.id}`, payload);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
}); //put del id를 특정

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: {
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
  },
});

// // 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// export const { addNumber, minusNumber } = reviewSlice.actions;
// // reducer 는 configStore에 등록하기 위해 export default 합니다.
// export default reviewSlice.reducer;

export const {} = reviewsSlice.actions;
export default reviewsSlice.reducer;
