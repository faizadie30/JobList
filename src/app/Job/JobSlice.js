import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Service from '../../service';
import { urlGenerator } from '../../utils/helpers';

const initialState = {
  data: [],
  page: 1,
  filterDescription: '',
  filterLocation: '',
  filterType: '',
};

export const getListJobs = createAsyncThunk(
  'jobSetup/getListJobs',
  async (params) => {
    const url = await urlGenerator(params, 'recruitment/positions.json');
    const config = {
      headers: {},
    };
    const response = await Service.apiGetListJobs(url, config);
    return response;
  }
);

export const JobSlice = createSlice({
  name: 'jobSetup',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      const { type, value } = action.payload;
      switch (type) {
        case 'description':
          return (state.filterDescription = value);
        case 'location':
          return (state.filterLocation = value);
        default:
          return (state.filterType = value);
      }
    },
    updatePage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListJobs.fulfilled, (state, action) => {
      const resData = action.payload.data;
      state.data = resData;
      return state;
    });
  },
});

/* export state */
export const jobSelector = (state) => state.jobSetup;

/* export command function from reducer */
export const { updateFilter } = JobSlice.actions;

/* export all reducer auth slice */
export default JobSlice.reducer;
