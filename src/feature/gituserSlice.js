// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // createAsyncThunk is a middlewear to perform async side-effect or operation
// export const getAllData = createAsyncThunk("gituser", async() => {
//   const res = fetch("https://api.github.com/users").thn((res) => res.json());
//   const result = res.json();e
//   return result;
// });

// export const gitUser = createSlice({
//   name: "gitUser",
//   initialstate: {
//     users: [],
//     loading: false,
//     error: null,
//   },
//   extraReducers:{
//     [getAllData.pending]:(state)=>{
//         state.loading = true;

//     },
//     [getAllData.pending]:(state,action)=>{
//         state.loading = false;
//         state.users = action.payload;
        
//     },
//     [getAllData.fulfilled]:(state,action)=>{
//         state.loading = false;
//         state.error = action.payload;
//     }
//   }
// });

// export default gitUser.reducer;



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// createAsyncThunk is middleware to perform async side-effects or operations
export const getAllData = createAsyncThunk("gitUser", async (args , {rejectWithValue}) => {
    try{
        const res = await fetch("https://api.github.com/users");
        const result = await res.json();
        return result;
    }catch(error){
        return rejectWithValue("Something went wrong", error);
    }
});

export const gitUser = createSlice({
  name: "gitUser",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default gitUser.reducer;




