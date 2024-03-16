import { configureStore } from "@reduxjs/toolkit";
import  gitUser  from "../feature/gituserSlice";
// import gitUserReducer from "../feature/gituserSlice";

export const store = configureStore({
  reducer: {
    app : gitUser,
  },
});
