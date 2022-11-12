import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../app/Auth/AuthSlice';
import jobReducer from '../app/Job/JobSlice';

const { REACT_APP_DEV } = process.env;

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }),
  reducer: {
    authSetup: authReducer,
    jobSetup: jobReducer,
  },
  devTools: REACT_APP_DEV === 'false' ? false : true,
});
