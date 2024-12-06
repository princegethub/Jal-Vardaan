import { combineReducers } from "redux";
import { authApi } from "../features/api/authApi";
import authReducer from "../features/authSlice";
import phedReducer from "../features/phedSlice";
import { phedApi } from "../features/api/phedApi";
import { gpApi } from "../features/api/gpApi";
const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
  [phedApi.reducerPath]: phedApi.reducer,
  phed: phedReducer,
  [gpApi.reducerPath]: gpApi.reducer, // Correctly uses reducerPath for dynamic key
});
export default rootReducer;