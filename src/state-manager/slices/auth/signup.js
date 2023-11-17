import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk(
  "users/signup",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(arg),
      });
      const result = await response.json();
      return { result, statusCode: response.status };
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  value: 0,
  loading: false,
  statusCode: null,
  errorMessage: "",
  isError: null,
  successMessage: "",
  isSuccessful: null,
  _errors: [],
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    changeAnyState: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    changeMultipleState: (state, action) => {
      const array = action.payload;
      array.forEach(({ key, value }) => {
        state[key] = value;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state, action) => {
      state.loading = true;
      console.log(action);
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      console.log(action);
      const { payload } = action;
      state.loading = false;
      state.statusCode = payload.statusCode;
      if (+payload.statusCode === 200 || +payload.statusCode === 201) {
        console.log("up")
        state.errorMessage = "";
        state.isError = false;
        state.successMessage = payload.result.message;
        state.isSuccessful = true;
        state._errors = payload.result.data?._errors || [];
      } else {
        console.log("down")
        state.errorMessage = payload.result.message;
        state.isError = true;
        state.successMessage = "";
        state.isSuccessful = false;
        state._errors = payload.result.data?._errors || [];
        console.log(state._errors)
      }
      // state.statusCode
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      console.log("Error", action);
    });
  },
});

export const loginSliceActions = loginSlice.actions;

export default loginSlice.reducer;
