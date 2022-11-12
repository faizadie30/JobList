import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

export const JobSlice = createSlice({
  name: 'jobSetup',
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload;
    },
  },
});

/* export state */
export const jobSelector = (state) => state.jobSetup;

/* export command function from reducer */
export const { updateData } = JobSlice.actions;

/* export all reducer auth slice */
export default JobSlice.reducer;
