import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import rootReducer from './rootReducer';
import { authApi } from '../features/api/authApi';
import { phedApi } from '../features/api/phedApi';
import { gpApi } from '../features/api/gpApi';
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, phedApi.middleware , gpApi.middleware),
});
export default store;