import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment(state, action) {
      state.count += 1;
    },
    decrement(state, action) {
      state.count -= 1;
    },
    incrementByAmount(state, action) {
      state.count += action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(incrementAsync.pending, (state) => {
        console.log("incrementAsync.pending");
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.count += action.payload;
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        console.log("incrementAsync.rejected", action.error);
      });
  },
});

export const incrementAsync = createAsyncThunk("counter/incrementAsync", async (amount) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return amount;
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
