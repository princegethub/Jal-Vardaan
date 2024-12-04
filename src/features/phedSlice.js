import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gplist: [],
}

export const phedSlice = createSlice({
  name: "phed",
  initialState: initialState,
  reducers: {
    setGpList(state, action) {
      state.gplist = action.payload;
      },
      addGp(state, action) {
        state.gplist.push(action.payload);
        },
        removeGp(state, action) {
          state.gplist = state.gplist.filter((item) => item.id !== action.payload.id);
          },
})