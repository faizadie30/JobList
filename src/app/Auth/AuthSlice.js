import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  session: {},
  isLogin: false,
};

export const AuthSlice = createSlice({
  name: 'authSetup',
  initialState,
  reducers: {
    saveSessions: (state, action) => {
      const data = action.payload;
      state.session = data;
    },
  },
});

/* export state */
export const authSelector = (state) => state.authSetup;

/* export command function from reducer */
export const { saveSessions } = AuthSlice.actions;

/* export all reducer auth slice */
export default AuthSlice.reducer;
