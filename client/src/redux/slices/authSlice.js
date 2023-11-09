// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
  recoveryStatus: null  
};


// Async thunk for user registration
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:5000/users/signup', credentials);
      return response.data.user;  
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
);

// Async thunk for user login
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:5000/users/login', credentials);
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
);

// Async thunk to fetch user data
export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:5000/users/', credentials);
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
);


// Async thunk for password recovery
export const recoverPassword = createAsyncThunk(
  'auth/recoverPassword',
  async (email, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:5000/users/recover', { email });
      return response.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
);


// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(recoverPassword.fulfilled, (state, action) => {
        state.recoveryStatus = 'success';  // Set recovery status to success on fulfilled
      })
      .addCase(recoverPassword.rejected, (state, action) => {
        state.error = action.payload;
        state.recoveryStatus = 'failed';  // Set recovery status to failed on rejected
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.error = action.payload;
      });
  }
});

// Export actions and reducer
export const { logoutUser, setUser, RecoverPassword } = authSlice.actions;
export default authSlice.reducer;
