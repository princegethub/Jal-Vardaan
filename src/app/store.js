import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/authSlice";
import rootReducer from './rootReducer';
import { authApi } from '../features/api/authApi';

 const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})

export default store;